import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposables = [];
	disposables.push(vscode.commands.registerCommand(
		'vscode-vim-shortcuts.activate', () => {
		}));
	context.subscriptions.push(...disposables);
}

export function deactivate() { }
