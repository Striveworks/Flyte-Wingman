const vscode = require("vscode");
const { spawn } = require("child_process");
const { writeFile, withPathsContentHash } = require("./utils");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const imagePrefix = "flyte";
const { outputChannel } = require("./output");

async function getHostFromFlyteConfig(folder) {
  let config = checkFlyteConfig(folder);
  const bytes = await vscode.workspace.fs.readFile(vscode.Uri.file(config));
  const doc = yaml.load(new TextDecoder().decode(bytes));
  return doc.admin.endpoint;
}

function generateWorkflowUrl(host, project, domain) {
  return `${host}/console/projects/${project}/workflows?domain=${domain}`;
}

function uploadWorkflow(folder, project, domain) {
  return new Promise((resolve, reject) => {
    const configPath = checkFlyteConfig(folder);

    let spawnUpload =
      process.platform === "win32"
        ? spawnUploadWorkflowWindows
        : spawnUploadWorkflowNix;

    withPathsContentHash((tag) => {
      const child = spawnUpload(folder, configPath, project, domain, tag);

      child.stdout.on("data", (chunk) => {
        outputChannel.append(chunk.toString());
      });
      child.stderr.on("data", (chunk) => {
        outputChannel.append(chunk.toString());
      });

      child.on("exit", (code) => {
        if (code == 0) {
          getHostFromFlyteConfig(folder).then((host) => {
            const prefix = "dns:///";
            host = host.startsWith(prefix) ? host.slice(prefix.length) : host;
            let url = generateWorkflowUrl(host, project, domain);
            outputChannel.append(`See registered workflow(s) at: ${url}`);
            resolve();
          });
        } else {
          reject(
            new Error("Failed to upload workflow", { cause: "spawnedProcess" })
          );
        }
      });

      child.on("error", () => {
        reject(
          new Error("Failed to upload workflow", { cause: "spawnedProcess" })
        );
      });
    }, folder);
  });
}

function spawnUploadWorkflowNix(folder, configPath, project, domain, tag) {
  return spawn(
    "/bin/sh",
    [
      "-c",
      `flytectl -c ${configPath} register files \
      --project ${project} \
      --domain ${domain} \
      --archive flyte-package.tgz \
      --version ${tag}`,
    ],
    {
      cwd: folder,
    }
  );
}

function spawnUploadWorkflowWindows(folder, configPath, project, domain, tag) {
  return spawn(
    "cmd",
    [
      "/k",
      `flytectl -c ${configPath} register files --project ${project} --domain ${domain} --archive flyte-package.tgz --version ${tag} & exit`,
    ],
    {
      cwd: folder,
    }
  );
}

function serializeWorkflow(containerRegistry, folder) {
  return new Promise((resolve, reject) => {
    outputChannel.show();
    withPathsContentHash((tag) => {
      let options = [
        "--pkgs",
        "workflows",
        "package",
        "--image",
        `${containerRegistry}/${imagePrefix}:${tag}`,
        "-f",
      ];

      const spawnSerialize =
        process.platform === "win32"
          ? spawnSerializeWorkflowWindows
          : spawnSerializeWorkflowNix;

      const child = spawnSerialize(folder, options);

      child.stdout.on("data", (chunk) => {
        outputChannel.append(chunk.toString());
      });
      child.stderr.on("data", (chunk) => {
        outputChannel.append(chunk.toString());
      });

      child.on("exit", (code) => {
        if (code == 0) {
          resolve();
        } else {
          reject(
            new Error("Failed to serialize workflow", {
              cause: "spawnedProcess",
            })
          );
        }
      });

      child.on("error", () => {
        reject(
          new Error("Failed to serialize workflow", { cause: "spawnedProcess" })
        );
      });
    }, folder);
  });
}

function spawnSerializeWorkflowNix(folder, options) {
  return spawn(
    "/bin/sh",
    ["-c", `source .venv/bin/activate && pyflyte ${options.join(" ")}`],
    {
      cwd: folder,
    }
  );
}

function spawnSerializeWorkflowWindows(folder, options) {
  return spawn(
    "cmd",
    [
      "/k",
      `.\\.venv\\Scripts\\activate.bat & pyflyte ${options.join(" ")} & exit`,
    ],
    {
      cwd: folder,
    }
  );
}

function buildContainer(containerRegistry, folder) {
  return new Promise((resolve, reject) => {
    const context = folder;
    withPathsContentHash((tag) => {
      outputChannel.show();
      const child = spawn("docker", [
        "build",
        "--tag",
        `${containerRegistry}/${imagePrefix}:${tag}`,
        context,
      ]);
      child.stdout.on("data", (chunk) => {
        outputChannel.append(chunk.toString());
      });
      child.stderr.on("data", (chunk) => {
        outputChannel.append(chunk.toString());
      });

      child.on("exit", (code) => {
        if (code == 0) {
          resolve(`${containerRegistry}/${imagePrefix}:${tag}`);
        } else {
          reject(
            new Error("Failed to build container", { cause: "spawnedProcess" })
          );
        }
      });

      child.on("error", () => {
        return reject(
          new Error("Failed to build container", { cause: "spawnedProcess" })
        );
      });
    }, folder);
  });
}

function pushContainer(image) {
  return new Promise((resolve, reject) => {
    outputChannel.show();
    const child = spawn("docker", ["push", image]);
    child.stdout.on("data", (chunk) => {
      outputChannel.append(chunk.toString());
    });
    child.stderr.on("data", (chunk) => {
      outputChannel.append(chunk.toString());
    });
    child.on("exit", (code) => {
      if (code == 0) {
        resolve();
      } else {
        reject(
          new Error("Failed to push container", { cause: "spawnedProcess" })
        );
      }
    });
    child.on("error", () => {
      reject(
        new Error("Failed to push container", { cause: "spawnedProcess" })
      );
    });
  });
}

function checkFlyteConfig(folder) {
  const homedir = require("os").homedir();
  let homedirPath = path.posix.join(homedir, ".flyte", "config.yaml");
  let workspacePath = path.posix.join(folder, "config.yaml");
  if (fs.existsSync(workspacePath)) {
    return workspacePath;
  }
  if (fs.existsSync(homedirPath)) {
    return homedirPath;
  }
  return "";
}

async function writeFlyteConfig(folder, templateChoice) {
  return await writeFile(
    folder,
    "config.yaml",
    templateChoice.configTemplate,
    false
  );
}

module.exports = {
  getHostFromFlyteConfig,
  serializeWorkflow,
  buildContainer,
  checkFlyteConfig,
  writeFlyteConfig,
  pushContainer,
  uploadWorkflow,
};
