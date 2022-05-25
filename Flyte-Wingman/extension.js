// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const wingman = require('./wingman');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('"Flyte-Wingman" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposables = [
    vscode.commands.registerCommand(
      "Flyte-Wingman.configure",
      wingman.configureWingman
    ),
    vscode.commands.registerCommand(
      "Flyte-Wingman.bootstrapWorkflow",
      wingman.bootstrapWorkflow
    ),
    vscode.commands.registerCommand(
      "Flyte-Wingman.registerLocalWorkflow",
      wingman.registerWorkflow
    ),
  ];

  context.subscriptions.push(...disposables);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
