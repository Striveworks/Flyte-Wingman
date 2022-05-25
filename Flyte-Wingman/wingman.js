const vscode = require("vscode");

const { chooseFolder, writeFile } = require("./utils");
const {
  serializeWorkflow,
  buildContainer,
  pushContainer,
  uploadWorkflow,
  writeFlyteConfig,
  getHostFromFlyteConfig,
} = require("./register");

const { createvenv, installDeps } = require("./python");
const { templates, chooseTemplate } = require("./templates");

const flytegrpc = require("./flytegrpc");

const configLocation = "wingman.json";

async function templateDir(folder, templateChoice) {
  return await Promise.all([
    writeRequirements(folder, templateChoice),
    writeDockerfile(folder, templateChoice),
  ]);
}

// Write Dockerfile
async function writeDockerfile(folder, templateChoice) {
  return await writeFile(folder, "Dockerfile", templateChoice.dockerfile);
}

// Write requirements.txt
async function writeRequirements(folder, templateChoice) {
  return await writeFile(
    folder,
    "requirements.txt",
    templateChoice.requirements
  );
}

async function configureGrpcClient(folder) {
  let host = await getHostFromFlyteConfig(folder);
  const prefix = "dns:///";
  host = host.startsWith(prefix) ? host.slice(prefix.length) : host;
  flytegrpc.configureClient(host);
}

async function getConfigUri() {
  if (!vscode.workspace.workspaceFolders) {
    await vscode.window.showErrorMessage("Please open a workspace first");
    return;
  }
  const wsPath = vscode.workspace.workspaceFolders[0].uri.path;
  return vscode.Uri.joinPath(vscode.Uri.file(wsPath), configLocation);
}

async function getWingmanConfiguration() {
  const configUri = await getConfigUri();
  if (!configUri) {
    return;
  }
  try {
    const fileContents = await vscode.workspace.fs.readFile(configUri);
    const decoder = new TextDecoder();
    const textContents = decoder.decode(fileContents);
    return JSON.parse(textContents);
  } catch (e) {
    if (e instanceof vscode.FileSystemError) {
      return;
    }
    throw e;
  }
}

async function configureWingman() {
  const configUri = await getConfigUri();
  if (!configUri) {
    return false;
  }
  const currentConfig = (await getWingmanConfiguration()) ?? {};
  const currentRegistry = currentConfig?.containerRegistry;
  const newContainerRegistry = await vscode.window.showInputBox({
    value: currentRegistry ?? "",
    title: "Wingman Configuration",
    prompt: "Container Registry to push containers to",
  });
  if (!newContainerRegistry) {
    return false;
  }
  currentConfig.containerRegistry = newContainerRegistry;
  const encoder = new TextEncoder();
  const configBytes = encoder.encode(JSON.stringify(currentConfig));
  try {
    await vscode.workspace.fs.writeFile(configUri, configBytes);
  } catch (e) {
    if (e instanceof vscode.FileSystemError) {
      return false;
    }
    throw e;
  }
  return true;
}

async function bootstrapWorkflow() {
  const template = await chooseTemplate();
  const folder = await chooseFolder(true);
  await templateDir(folder, template);
  await writeFlyteConfig(folder, template);
  const subDir = vscode.Uri.joinPath(vscode.Uri.file(folder), "workflows");
  await vscode.workspace.fs.createDirectory(subDir);
  await Promise.all([
    writeFile(subDir.fsPath, "workflow.py", template.workflowSkeleton, true),
    writeFile(subDir.fsPath, "__init__.py"),
  ]);
}

async function registerWorkflow() {
  const containerRegistry = (await getWingmanConfiguration())
    ?.containerRegistry;
  if (!containerRegistry) {
    return vscode.window.showErrorMessage(
      "Wingman doesn't seem to be configured; try `configure wingman`"
    );
  }
  const folder = await chooseFolder();
  if (!folder){
    return vscode.window.showErrorMessage(
      "Wingman needs a workflow to register; try `Initialize Workflow`"
    );
  }
  await configureGrpcClient(folder);
  const projectAndDomain = await flytegrpc.chooseProjectAndDomain();
  if (!projectAndDomain) {
    return;
  }
  const [project, domain] = projectAndDomain;
  await templateDir(folder, templates.kubernetes_pod);
  try{
    const imageName = await buildContainer(containerRegistry, folder);
    await pushContainer(imageName);
    await createvenv(folder);
    await installDeps(folder);
    await serializeWorkflow(containerRegistry, folder);
    await uploadWorkflow(folder, project, domain);
  } catch (e) {
    // handle expected failures
    if (e instanceof Error && e.cause == "spawnedProcess"){
      vscode.window.showErrorMessage(`Failed to register workflow: ${e.message}`);
      return
    }
    throw e;
  }
  
}

module.exports = {
  bootstrapWorkflow,
  configureWingman,
  registerWorkflow,
};
