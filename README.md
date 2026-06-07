# Fishpo Interactive Demo

An interactive email client mockup that demonstrates Fishpo's AI-powered scam detection. Built to be embedded in the Fishpo website via iframe.

**Live demo:** https://frauda-team.github.io/fishpo-interactive-demo/

---

## What it does

- Renders a realistic email client (Outlook-style) inside a fake company intranet
- Loads 5 clean business emails on startup
- After 1 second, a scam email arrives (BEC scenario: attacker impersonates a known contact with a typo domain, attaches a malicious PDF)
- Clicking any email opens the Fishpo plugin panel on the right, which runs a 1.5s animated analysis
- For the scam email: suspicious phrases are highlighted in red directly in the email body, the spoofed sender address is flagged, and the malicious attachment is marked

## Tech stack

- Vite + React 18
- `@fluentui/react-icons` for Fluent/Outlook-style icons
- Pure CSS (no UI library) — Fluent 2 design tokens via CSS variables
- No routing, no state management library

## Local development

```bash
npm install
npm run dev        # http://localhost:5173/fishpo-interactive-demo/
```

## Deploy

Pushes to `main` automatically deploy to GitHub Pages via the Actions workflow in `.github/workflows/deploy.yml`.

To trigger manually: Actions tab → "Deploy to GitHub Pages" → Run workflow.

**First-time setup:** In the repo Settings → Pages → set Source to "GitHub Actions".

## Embedding

```html
<iframe
  src="https://frauda-team.github.io/fishpo-interactive-demo/"
  width="100%"
  height="700px"
  frameborder="0"
  style="border-radius: 12px;"
></iframe>
```

## Project structure

```
src/
  App.jsx           # Root — state, layout, outer website wrapper
  App.css           # All styles (Fluent tokens, layout, animations)
  index.css         # Global reset and CSS custom properties
  data.js           # Email data + scamCheck payloads
  components/
    TopBar.jsx      # Search bar and brand
    Sidebar.jsx     # Folder nav + icon rail
    EmailList.jsx   # Inbox list with tabs and flag button
    ReadingPane.jsx # Email reading view with highlight support
    PluginPanel.jsx # Fishpo analysis panel (scanning + results)
```
