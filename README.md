# Semi-Vim Shortcuts for VS Code

This simple extension enables some basic movement shortcuts of Vim in your VS Code environment.

Hopefully, nothing would change with your existing shortcuts. Anyway, you can always disable the extension using the Extensions view (`ctrl`+`shift`+`X`).

## Shortcuts

| Action                 | Shortcut    | New shortcut                 |
| ---------------------- | ----------- | ---------------------------- |
| Cursor/item left       | `⬅️`         | `ctrl` `cmd` `h`             |
| Cursor/item down       | `⬇️`         | `ctrl` `cmd` `j`             |
| Cursor/item up         | `⬆️`         | `ctrl` `cmd` `k`             |
| Cursor/item right      | `➡️`         | `ctrl` `cmd` `l`             |
| Word left              | `ctrl` `⬅️`  | `ctrl` `cmd` `alt` `h`       |
| Word down              | `ctrl` `⬇️`  | `ctrl` `cmd` `alt` `j`       |
| Word up                | `ctrl` `⬆️`  | `ctrl` `cmd` `alt` `k`       |
| Word right             | `ctrl` `➡️`  | `ctrl` `cmd` `alt` `l`       |
| Move to line beginning | `home`      | `ctrl` `alt` `0`             |
| Move to line end       | `end`       | `ctrl` `alt` `4`             |
| Delete previous        | `backspace` | `ctrl` `cmd` `space`         |
| Delete next            | `del`       | `ctrl` `cmd` `shift` `space` |

👍 You can also use these shortcuts on file explorer, sidebar lists/trees (e.g., find in files or source control,) auto-completion lists and breadcrumbs.

👍 Hold `shift` and/or `alt` keys with these shortcuts to select text or move by word.

👍 Hold `alt` keys with delete next/previous shortcuts to delete by word.

👍 To use shortcuts on the command palette lists, you need to first press `tab` key to focus on the list.

## Manual configuration

Want to manually set the shortcuts? Just open [this][gist] Gist and follow the instructions at the top of the file.

## See also

* ["Basic Vim Shortcuts in VS Code"][blog] on `DEV.to`
* [Manual configuration guide][gist] on `gist.github.com`

[blog]: https://dev.to/babakks/basic-vim-shortcuts-in-vs-code-i62
[gist]: https://gist.github.com/babakks/cc30aeee2e2342ea22cd6b76f76f65b6
