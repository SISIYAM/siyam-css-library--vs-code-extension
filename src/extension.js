const vscode = require("vscode");
const UtilityClassCompletionProvider =
  require("./completionProvider").UtilityClassCompletionProvider;

function activate(context) {
  const disposable = vscode.languages.registerCompletionItemProvider(
    "html",
    new UtilityClassCompletionProvider(),
    "."
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
