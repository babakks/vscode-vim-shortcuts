# Semi-Vim Shortcuts for VS Code

This simple extension enables some basic movement shortcuts of Vim in your VS Code environment.

Hopefully, nothing would change with your existing shortcuts. Anyway, you can always disable the extension using the Extensions view (<kbd>ctrl</kbd>+<kbd>shift</kbd>+<kbd>X</kbd>).

## Shortcuts

| Action                 | Shortcut                     | New shortcut                                                     |
| ---------------------- | ---------------------------- | ---------------------------------------------------------------- |
| Cursor/item left       | <kbd>⬅️</kbd>                 | <kbd>ctrl</kbd> <kbd>cmd</kbd> <kbd>h</kbd>                      |
| Cursor/item down       | <kbd>⬇️</kbd>                 | <kbd>ctrl</kbd> <kbd>cmd</kbd> <kbd>j</kbd>                      |
| Cursor/item up         | <kbd>⬆️</kbd>                 | <kbd>ctrl</kbd> <kbd>cmd</kbd> <kbd>k</kbd>                      |
| Cursor/item right      | <kbd>➡️</kbd>                 | <kbd>ctrl</kbd> <kbd>cmd</kbd> <kbd>l</kbd>                      |
| Word left              | <kbd>ctrl</kbd> <kbd>⬅️</kbd> | <kbd>ctrl</kbd> <kbd>cmd</kbd> <kbd>alt</kbd> <kbd>h</kbd>       |
| Word down              | <kbd>ctrl</kbd> <kbd>⬇️</kbd> | <kbd>ctrl</kbd> <kbd>cmd</kbd> <kbd>alt</kbd> <kbd>j</kbd>       |
| Word up                | <kbd>ctrl</kbd> <kbd>⬆️</kbd> | <kbd>ctrl</kbd> <kbd>cmd</kbd> <kbd>alt</kbd> <kbd>k</kbd>       |
| Word right             | <kbd>ctrl</kbd> <kbd>➡️</kbd> | <kbd>ctrl</kbd> <kbd>cmd</kbd> <kbd>alt</kbd> <kbd>l</kbd>       |
| Move to line beginning | <kbd>home</kbd>              | <kbd>ctrl</kbd> <kbd>alt</kbd> <kbd>0</kbd>                      |
| Move to line end       | <kbd>end</kbd>               | <kbd>ctrl</kbd> <kbd>alt</kbd> <kbd>4</kbd>                      |
| Delete previous        | <kbd>backspace</kbd>         | <kbd>ctrl</kbd> <kbd>cmd</kbd> <kbd>space</kbd>                  |
| Delete next            | <kbd>del</kbd>               | <kbd>ctrl</kbd> <kbd>cmd</kbd> <kbd>shift</kbd> <kbd>space</kbd> |

👍 You can also use these shortcuts on file explorer, sidebar lists/trees (e.g., find in files or source control,) auto-completion lists and breadcrumbs.

👍 Hold <kbd>shift</kbd> and/or <kbd>alt</kbd> keys with these shortcuts to select text or move by word.

👍 Hold <kbd>alt</kbd> keys with delete next/previous shortcuts to delete by word.

👍 To use shortcuts on the command palette lists, you need to first press <kbd>tab</kbd> key to focus on the list.

## Manual configuration

Want to manually set the shortcuts? Just open [this][gist] Gist and follow the instructions at the top of the file.

## See also

* ["Basic Vim Shortcuts in VS Code"][blog] on `DEV.to`
* [Manual configuration guide][gist] on `gist.github.com`

[blog]: https://dev.to/babakks/basic-vim-shortcuts-in-vs-code-i62
[gist]: https://gist.github.com/babakks/cc30aeee2e2342ea22cd6b76f76f65b6
