const utilityClasses = require("./utilityClasses");

const vscode = require("vscode");

class UtilityClassCompletionProvider {
  constructor() {
    this.utilityClasses = utilityClasses;
  }

  provideCompletionItems(document, position, token, context) {
    const completionItems = [];

    this.utilityClasses.forEach((utilityClass) => {
      const completionItem = new vscode.CompletionItem(
        utilityClass,
        vscode.CompletionItemKind.Class
      );
      completionItem.detail = "Utility class";
      completionItem.documentation = new vscode.MarkdownString(
        `**${utilityClass}**\n\nA utility class for styling.`
      );
      completionItems.push(completionItem);
    });

    return completionItems;
  }
}

module.exports = {
  UtilityClassCompletionProvider,
};
