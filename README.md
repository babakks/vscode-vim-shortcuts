# Semi-Vim Shortcuts for VS Code

This simple extension enables some basic movement shortcuts of Vim in your VS Code environment.

Hopefully, nothing would change with your existing shortcuts. Anyway, you can always disable the extension using the Extensions view (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd>).

## Shortcuts

| Action                 | Shortcut                            | New shortcut                                                                            |
| ---------------------- | ----------------------------------- | --------------------------------------------------------------------------------------- |
| Cursor/item left       | <kbd>Left</kbd>                     | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>H</kbd>                                             |
| Cursor/item down       | <kbd>Down</kbd>                     | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>J</kbd>                                             |
| Cursor/item up         | <kbd>Up</kbd>                       | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>K</kbd>                                             |
| Cursor/item right      | <kbd>Right</kbd>                    | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>L</kbd>                                             |
| Word left              | <kbd>Ctrl</kbd>+<kbd>Left</kbd>     | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>H</kbd>                              |
| Word down              | <kbd>Ctrl</kbd>+<kbd>Down</kbd>     | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>J</kbd>                              |
| Word up                | <kbd>Ctrl</kbd>+<kbd>Up</kbd>       | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>                              |
| Word right             | <kbd>Ctrl</kbd>+<kbd>Right</kbd>    | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>Alt</kbd>+<kbd>L</kbd>                              |
| Move to line beginning | <kbd>Home</kbd>                     | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>0</kbd>                                             |
| Move to line end       | <kbd>End</kbd>                      | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>4</kbd>                                             |
| Delete previous        | <kbd>Backspace</kbd>                | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>Space</kbd>                                         |
| Delete next            | <kbd>Del</kbd>                      | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>Space</kbd>                        |
| Page down              | <kbd>PageDown</kbd>                 | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>F</kbd>                                             |
| Page down              | <kbd>PageDown</kbd>                 | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>D</kbd>                                             |
| Page up                | <kbd>PageUp</kbd>                   | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>B</kbd>                                             |
| Page up                | <kbd>PageUp</kbd>                   | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>U</kbd>                                             |
| Top                    | <kbd>Ctrl</kbd>+<kbd>Home</kbd>     | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>G</kbd> <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>G</kbd> |
| Bottom                 | <kbd>Ctrl</kbd>+<kbd>End</kbd>      | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Cmd</kbd>+<kbd>G</kbd>                            |
| Next editor            | <kbd>Ctrl</kbd>+<kbd>PageDown</kbd> | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>W</kbd> <kbd>L</kbd>                                |
| Previous editor        | <kbd>Ctrl</kbd>+<kbd>PageUp</kbd>   | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>W</kbd> <kbd>H</kbd>                                |
| Focus bottom group     | -                                   | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>W</kbd> <kbd>J</kbd>                                |
| Previous editor        | -                                   | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>W</kbd> <kbd>K</kbd>                                |
| Next terminal          | <kbd>Ctrl</kbd>+<kbd>PageDown</kbd> | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>W</kbd> <kbd>L</kbd>                                |
| Previous terminal      | <kbd>Ctrl</kbd>+<kbd>PageUp</kbd>   | <kbd>Ctrl</kbd>+<kbd>Cmd</kbd>+<kbd>W</kbd> <kbd>H</kbd>                                |

👍 You can also use these shortcuts on file explorer, sidebar lists/trees (e.g., find in files or source control,) auto-completion lists and breadcrumbs.

👍 Hold <kbd>Shift</kbd> and/or <kbd>Alt</kbd> keys with these shortcuts to select text or move by word.

👍 Hold <kbd>Alt</kbd> keys with delete next/previous shortcuts to delete by word.

👍 To use shortcuts on the command palette lists, you need to first press <kbd>Tab</kbd> key to focus on the list.

## Manual configuration

Want to manually set the shortcuts? Just open [this][gist] Gist and follow the instructions at the top of the file.

## See also

* ["Basic Vim Shortcuts in VS Code"][blog] on `DEV.to`
* [Manual configuration guide][gist] on `gist.github.com`

[blog]: https://dev.to/babakks/basic-vim-shortcuts-in-vs-code-i62
[gist]: https://gist.github.com/babakks/cc30aeee2e2342ea22cd6b76f76f65b6
