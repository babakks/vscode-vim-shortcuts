# Semi-Vim Shortcuts for VS Code

This simple extension enables some basic movement shortcuts of Vim in your VS Code environment.

Hopefully, nothing would change with your existing shortcuts. Anyway, you can always disable the extension using the Extensions view (`Ctrl`+`Shift`+`X`).

## Shortcuts

| Action                 | Shortcut       | New shortcut                      |
| ---------------------- | -------------- | --------------------------------- |
| Cursor/item left       | `Left`         | `Ctrl`+`Cmd`+`h`                  |
| Cursor/item down       | `Down`         | `Ctrl`+`Cmd`+`j`                  |
| Cursor/item up         | `Up`           | `Ctrl`+`Cmd`+`k`                  |
| Cursor/item right      | `Right`        | `Ctrl`+`Cmd`+`l`                  |
| Word left              | `Ctrl`+`Left`  | `Ctrl`+`Cmd`+`Alt`+`h`            |
| Word down              | `Ctrl`+`Down`  | `Ctrl`+`Cmd`+`Alt`+`j`            |
| Word up                | `Ctrl`+`Up`    | `Ctrl`+`Cmd`+`Alt`+`k`            |
| Word right             | `Ctrl`+`Right` | `Ctrl`+`Cmd`+`Alt`+`l`            |
| Move to line beginning | `Home`         | `Ctrl`+`Alt`+`0`                  |
| Move to line end       | `End`          | `Ctrl`+`Alt`+`4`                  |
| Delete previous        | `Backspace`    | `Ctrl`+`Cmd`+`Space`              |
| Delete next            | `Del`          | `Ctrl`+`Cmd`+`Shift`+`Space`      |
| Page down              | `PageDown`     | `Ctrl`+`Cmd`+`f`                  |
| Page down              | `PageDown`     | `Ctrl`+`Cmd`+`d`                  |
| Page up                | `PageUp`       | `Ctrl`+`Cmd`+`b`                  |
| Page up                | `PageUp`       | `Ctrl`+`Cmd`+`u`                  |
| Top                    | `Ctrl`+`Home`  | `Ctrl`+`Cmd`+`g` `Ctrl`+`Cmd`+`g` |
| Bottom                 | `Ctrl`+`End`   | `Ctrl`+`Shift`+`Cmd`+`g`          |

👍 You can also use these shortcuts on file explorer, sidebar lists/trees (e.g., find in files or source control,) auto-completion lists and breadcrumbs.

👍 Hold `Shift` and/or `Alt` keys with these shortcuts to select text or move by word.

👍 Hold `Alt` keys with delete next/previous shortcuts to delete by word.

👍 To use shortcuts on the command palette lists, you need to first press `Tab` key to focus on the list.

## Manual configuration

Want to manually set the shortcuts? Just open [this][gist] Gist and follow the instructions at the top of the file.

## See also

* ["Basic Vim Shortcuts in VS Code"][blog] on `DEV.to`
* [Manual configuration guide][gist] on `gist.github.com`

[blog]: https://dev.to/babakks/basic-vim-shortcuts-in-vs-code-i62
[gist]: https://gist.github.com/babakks/cc30aeee2e2342ea22cd6b76f76f65b6
