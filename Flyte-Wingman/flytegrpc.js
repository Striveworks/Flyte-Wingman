const grpc = require("@grpc/grpc-js");
const projectMessages = require("./gen/flyteidl/admin/project_pb.js");
const services = require("./gen/flyteidl/service/admin_grpc_pb.js");
const vscode = require("vscode");

let client = null;

function configureClient(
  endpoint,
  credentials = grpc.credentials.createInsecure()
) {
  client = new services.AdminServiceClient(endpoint, credentials);
}

function verifyClient() {
  if (!client) {
    console.debug("Configure client before calling");
  }
}

function getProjectList(token) {
  return new Promise((resolve, _) => {
    verifyClient();
    const req = new projectMessages.ProjectListRequest().setLimit(10);
    if (token) {
      req.setToken(token);
    }
    client.listProjects(req, (err, message) => resolve([err, message]));
  });
}

async function chooseProject() {
  let resultProject = undefined;
  let token = undefined;
  while (!resultProject) {
    let message = await getProjectList(token);
    let success = await wasSuccessful(message);
    if (!success) {
      return;
    }
    let [_, result] = message;
    const projectList = result.getProjectsList();
    const projectNames = projectList.map((project) => project.getName());
    projectNames.push("...");
    const chosenProject = await vscode.window.showQuickPick(projectNames);
    if (!chosenProject) {
      return;
    }
    if (chosenProject != "...") {
      return projectList.filter(
        (project) => project.getName() == chosenProject
      )[0];
    } else {
      token = result.getToken();
    }
  }
}

async function wasSuccessful(message) {
  let [err, _] = message;
  if (err) {
    await vscode.window.showErrorMessage(
      `Unable to communicate with flyte: ${err}`
    );
    return false;
  }
  return true;
}

async function chooseProjectAndDomain() {
  const chosenProjectObj = await chooseProject();
  if (!chosenProjectObj) {
    return;
  }
  const domainList = chosenProjectObj.getDomainsList();
  const domainNames = domainList.map((domain) => domain.getName());
  const chosenDomain = await vscode.window.showQuickPick(domainNames);
  if (!chosenDomain) {
    return;
  }
  return [chosenProjectObj.getName(), chosenDomain];
}

module.exports = {
  configureClient,
  chooseProjectAndDomain,
};
