// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			
			editor.edit(editBuilder => {
				const currentText: string = document.getText();

				// yep..


				let invalidRange = new vscode.Range(0, 0, document.lineCount /*intentionally missing the '-1' */, 0);
				let fullRange = document.validateRange(invalidRange);
				editBuilder.replace(fullRange, newTxt);
			})


		}	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
