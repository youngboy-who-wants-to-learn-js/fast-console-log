const vscode = require("vscode");

const pasteConsoleFromSelection = async () => {
  const editor = vscode.window.activeTextEditor;

  const clipboardContent = await vscode.env.clipboard.readText();

  if (editor && clipboardContent) {
    const currentCursorPosition = editor.selection.active;

    editor.edit((editBuilder) => {
      currentCursorPosition;
      editBuilder.insert(
        currentCursorPosition,
        `console.log("${clipboardContent}", ${clipboardContent})`
      );
    });
  }
};

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "fast-console-log.pasteConsole",
    pasteConsoleFromSelection
  );
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
