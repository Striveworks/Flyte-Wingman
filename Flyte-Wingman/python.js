const path = require("path");
const { spawn } = require("child_process");
const { outputChannel } = require("./output");

function createvenv(folder) {
  return new Promise((resolve, reject) => {
    outputChannel.show();
    const child = spawn("python3", [
      "-m",
      "venv",
      path.posix.join(folder, ".venv"),
    ]);

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
          new Error("Failed to create virtual environment", {
            cause: "spawnedProcess",
          })
        );
      }
    });

    child.on("error", () => {
      reject(
        new Error("Failed to create virtual environment", {
          cause: "spawnedProcess",
        })
      );
    });
  });
}

function installDeps(folder) {
  return new Promise((resolve, reject) => {
    outputChannel.show();
    const spawnInstall =
      process.platform === "win32"
        ? spawnInstallDepsWindows
        : spawnInstallDepsNix;

    const child = spawnInstall(folder);

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
          new Error("Failed to install dependencies", {
            cause: "spawnedProcess",
          })
        );
      }
    });

    child.on("error", () => {
      reject(
        new Error("Failed to install dependencies", {
          cause: "spawnedProcess",
        })
      );
    });
  });
}

function spawnInstallDepsNix(folder) {
  return spawn(
    "/bin/sh",
    [
      "-c",
      "source .venv/bin/activate && python -m pip install -r requirements.txt",
    ],
    {
      cwd: folder,
    }
  );
}

function spawnInstallDepsWindows(folder) {
  return spawn(
    "cmd",
    [
      "/k",
      ".\\.venv\\Scripts\\activate.bat & pip install -r requirements.txt & exit",
    ],
    {
      cwd: folder,
    }
  );
}

module.exports = {
  createvenv,
  installDeps,
};
