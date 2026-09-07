# AI Evreni — AI Tools Directory

A small, filterable directory of AI tools (ChatGPT, DALL-E, Bard, and more), built as a static site with a search box, category/price filters, and a detail modal per tool.

🇩🇪 German version: [README.de.md](README.de.md)

## What it does

- Lists AI tools with name, category (text/image/code generation), price (free/paid), and a short description.
- Live search and dropdown filters update the list instantly.
- Clicking a tool opens a modal with more detail and a link to the tool's site.
- Tool data lives in a plain JS array in `script.js` — no backend, no build step.

## Tech stack

Plain HTML, CSS and vanilla JavaScript.

## Running it

Open `index.html` in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

## Notes

Cleaned up before publishing: the script file was misnamed `script.cs` in the original source (now `script.js`), and stray AI-assistant chat output that had been accidentally pasted after the closing `</html>` tag was removed. The "Learn", "Community" and "Resources" sections are intentionally light placeholders for future content.
