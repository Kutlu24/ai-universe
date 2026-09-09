# AI Universe — a field guide to AI tools

A small, filterable directory of real, hand-verified AI tools across 8 categories (chat, image, video, audio, coding, writing, research, agents), built as a static site with a search box, category/price filters, and a detail modal per tool.

🇩🇪 German version: [README.de.md](README.de.md)

## What it does

- Lists 30+ real, current AI tools with name, category, price tier (has a free tier / paid only), a short description, and a link to the tool's own site - no invented tools, no guessed URLs.
- Live search and dropdown filters update the list instantly, with a running result count.
- Clicking a tool opens a modal with more detail.
- Tool data lives in a plain JS array in `script.js` — no backend, no build step.

## 2026-09 update

The original source was a 3-entry placeholder stub (including a stale "Bard" reference - Google retired that branding for Gemini) with a Turkish-language UI and a generic Bootstrap-blue template. Replaced with: a full English translation, 30+ real catalog entries across 8 categories, and a redesigned "field guide" visual identity (deep ink background, warm gold accent, Fraunces/Public Sans/IBM Plex Mono typography) distinct from the earlier generic template.

## Tech stack

Plain HTML, CSS and vanilla JavaScript.

## Running it

Open `index.html` in a browser, or serve the folder with any static file server:

```bash
npx serve .
```

## Notes

Cleaned up before publishing: the script file was misnamed `script.cs` in the original source (now `script.js`), and stray AI-assistant chat output that had been accidentally pasted after the closing `</html>` tag was removed. The "Learn", "Community" and "Resources" sections are intentionally light placeholders for future content.
