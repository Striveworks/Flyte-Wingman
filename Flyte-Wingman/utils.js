const vscode = require("vscode");
const fs = require("fs");
const tar = require("tar");
const { createHash } = require("crypto");
const { object } = require("google-protobuf");

const wsPath = vscode.workspace.workspaceFolders[0].uri.path;

function withChosenDocument(errorMessage, functionWithDocument) {
  let docs = vscode.workspace.textDocuments ?? [];
  let documentOptions = docs.map((x) => x.uri.fsPath);
  if (documentOptions.length == 0) {
    vscode.window.showErrorMessage(errorMessage);
    return;
  }
  vscode.window.showQuickPick(documentOptions).then(functionWithDocument);
}

function withChosenDocumentText(errorMessage, functionWithDocumentText) {
  withChosenDocument(errorMessage, (runFile) => {
    let docs = vscode.workspace.textDocuments ?? [];
    let doc = docs.filter((doc) => doc.uri.fsPath == runFile)[0];
    let data = doc.getText();
    functionWithDocumentText(data);
  });
}
async function chooseFolder(createIfMissing) {
  const folders = await getDirectories();
  if (folders.length !== 0) {
    return await vscode.window.showQuickPick(
      folders.map((folder) => folder.fsPath)
    );
  } else if (createIfMissing) {
    let newDirUri = vscode.Uri.joinPath(vscode.Uri.file(wsPath), "workflow");
    await vscode.workspace.fs.createDirectory(newDirUri);
    return newDirUri.fsPath;
  }
}

async function getDirectories() {
  let allDirectories = [];
  let folders = vscode.workspace.workspaceFolders ?? [];
  for (let directory of folders) {
    let contents = await vscode.workspace.fs.readDirectory(directory.uri);
    for (let [path, filetype] of contents) {
      if (filetype == vscode.FileType.Directory) {
        allDirectories.push(vscode.Uri.joinPath(directory.uri, path));
      }
    }
  }
  return allDirectories;
}

function getFiles(location, onFiles) {
  vscode.workspace.fs.readDirectory(vscode.Uri.file(location)).then((value) => {
    let files = value
      .filter(([_, filetype]) => {
        return filetype == vscode.FileType.File;
      })
      .map(([path, _]) => {
        return path;
      });
    onFiles(files);
  });
}

async function writeFile(
  directory,
  filename,
  content = "",
  show_content = false
) {
  let targetFile = vscode.Uri.joinPath(vscode.Uri.file(directory), filename);
  try {
    await vscode.workspace.fs.stat(targetFile);
  } catch (e) {
    if (e.toString().includes("EntryNotFound")) {
      await vscode.workspace.fs.writeFile(
        targetFile,
        Buffer.from(content, "utf8")
      );
    } else {
      throw e;
    }
  }
  if (show_content) {
    await vscode.window.showTextDocument(targetFile);
  }
}

function withPathsContentHash(onHash, ...paths) {
  const hash = createHash("sha256");
  hash.on("readable", () => {
    const data = hash.read();
    if (data) {
      onHash(data.toString("hex"));
    }
  });

  tar
    .c(
      {
        gzip: true,
        noMtime: true,
        portable: true,
        filter: (path, _) => {
          return !(
            path.includes(".venv") ||
            path.includes("flyte-package.tgz") ||
            path.includes("__pycache__")
          );
        },
      },
      paths
    )
    .pipe(hash);
}

function withFolderAsBase64Tar(folder, onTar) {
  // assume whichever has more splits is correct
  const splitForward = folder.split("/");
  const splitBackward = folder.split("\\");
  const chosenSplit =
    splitForward.length > splitBackward.length ? splitForward : splitBackward;
  const target = chosenSplit.pop();
  const prefix = folder.substring(0, folder.length - target.length);

  const gzip = tar.c(
    {
      gzip: true,
      noMtime: true,
      portable: true,
      cwd: prefix,
      filter: (path, _) => {
        return !(
          path.includes(".venv") ||
          path.includes("flyte-package.tgz") ||
          path.includes("__pycache__")
        ); // exclude the venv and packaged workflow
      },
    },
    [target]
  );
  const chunks = [];
  gzip.on("data", (chunk) => {
    chunks.push(Buffer.from(chunk));
  });
  gzip.on("end", (_) => {
    let b64Tar = Buffer.concat(chunks).toString("base64");
    onTar(b64Tar);
  });
}

module.exports = {
  withChosenDocument,
  withChosenDocumentText,
  chooseFolder,
  getFiles,
  writeFile,
  withPathsContentHash,
  withFolderAsBase64Tar,
};
