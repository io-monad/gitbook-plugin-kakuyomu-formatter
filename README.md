# GitBook Plugin - Kakuyomu Formatter

This GitBook plugin allows you to format [Kakuyomu Notation](https://kakuyomu.jp/help/entry/notation) which gives texts ruby (letters' readings) and emphasis by dots. It also converts a single line-break into a paragraph.

Since emphasis by dots is not supported by major browsers, it uses Markdown-style \*emphasis* instead.

## Configuration

```json
{
    "pluginsConfig": {
        "kakuyomuFormatter": {
            "paragraph": true,
            "ruby": true
        }
    }
}
```
