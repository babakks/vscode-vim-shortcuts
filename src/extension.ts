import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const disposables = [];
	disposables.push(
		vscode.commands.registerCommand('vscode-vim-shortcuts.insertInEditor', async (value: string) => {
			const editor = vscode.window.activeTextEditor;
			if (!editor) {
				return;
			}

			/**
			 * Note that we cannot use the standard text editing functionality (i.e., `editor.edit(.)`) to insert the
			 * `value` in the editor, because the editor behavior would not be completely similar (in terms of user
			 * experience). For example, if you the `value` is `\n`, using the `editor.edit(.)` will result in a line
			 * break and the caret positioned at the beginning of the line (i.e., at column zero), while when the user
			 * presses the Enter key, the caret stays at the offset of the same line it was before (i.e., respects the
			 * leading whitespace).
			 */
			const snippet = new vscode.SnippetString(value);
			const selectionsSorted = Array.from(editor.selections).sort((a, b) => -a.start.compareTo(b.start));
			for (const selection of selectionsSorted) {
				/**
				 * Note that we have to apply `insertSnippet` one-by-one, because doing them all together (e.g., by
				 * using `Promise.allSettled(.)`), results in just one snippet insertion. So, awaiting for every single
				 * insertion is necessary. 
				 */
				await editor.insertSnippet(snippet, selection);
			}
		}),
		vscode.commands.registerCommand('vscode-vim-shortcuts.insertInTerminal', async (value: string) => {
			vscode.window.activeTerminal?.sendText(value, false);
		}));
	context.subscriptions.push(...disposables);
}

export function deactivate() { }
