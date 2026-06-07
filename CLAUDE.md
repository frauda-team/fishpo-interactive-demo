# CLAUDE.md — Fishpo Interactive Demo

Context for AI-assisted development. Read this before making changes.

## What this project is

A self-contained React demo of an email client with the Fishpo scam-detection plugin. It is designed to be embedded in the Fishpo marketing website via iframe. The outer "Meridian Group" intranet wrapper is intentional — it makes the demo feel real and gives the plugin a believable context.

## Running locally

```bash
npm install
npm run dev
```

The vite base is `/fishpo-interactive-demo/` (required for GitHub Pages). When running locally this means the app is at `http://localhost:5173/fishpo-interactive-demo/`.

## Key architecture decisions

**Single CSS file (`App.css`):** All component styles live here alongside the layout. Do not introduce CSS modules or styled-components — keep it flat and scannable.

**No routing:** The app is a single view. `mobilePane` state ('list' | 'reading') handles the mobile navigation pattern.

**Plugin panel is a flex sibling, not an overlay:** `.plugin-panel` sits in the same flex row as `.reading-pane`. Its width transitions from 0 → 320px, which compresses the reading pane naturally. Do not change this to `position: fixed` on desktop.

**Highlight system:** Suspicious phrases in the scam email body are pre-wrapped in `<span class="sus-mark sus-urgency">`. When `highlightMode === 'scam'` (set by App after PluginPanel calls `onAnalysisDone`), the `.highlights-on` class is added to `.msg-body`, which activates the red highlight styles via CSS. The spans are inert by default — no JS needed to highlight/unhighlight.

## Adding or modifying emails

All email data is in `src/data.js`. Each email object requires:

```js
{
  id,          // unique number
  unread,      // bool
  from,        // display name
  fromEmail,   // email address
  initials,    // 2-char string for avatar
  avatarBg,    // CSS color string
  subject,
  preview,     // short text shown in list
  time,        // display string (e.g. 'Jun 5', 'Yesterday', 'Just now')
  date,        // full date string shown in reading pane
  to,          // recipient display string
  body,        // HTML string — can use .callout, table, h3, ul, .sig classes
  scamCheck: {
    verdict: 'clean' | 'scam',
    checks: [{ id, label, pass: bool, detail }]  // 4 checks expected
  },
  attachments: [{ name, malicious: bool }],  // optional
  isNew: bool,  // optional — triggers flash animation when email arrives
}
```

The scam email (`scamEmail`) is exported separately and injected after 1 second via `useEffect` in `App.jsx`. To add more delayed emails, add more `setTimeout` calls there.

## Scam highlight markup

To highlight suspicious phrases in a scam email body, wrap them in:

```html
<span class="sus-mark sus-urgency">suspicious text here</span>
```

Only `sus-urgency` exists as a variant currently. The styling activates automatically when the plugin verdict is `'scam'`.

## Plugin panel timing

`PluginPanel.jsx`: the analysis animation runs for **1500ms** then reveals results and calls `onAnalysisDone(verdict)`. The progress bar steps by +2 every 20ms (reaching ~98% at 1000ms, holding until the timeout fires). Adjust the `setTimeout` value to change the duration.

## CSS design tokens

Defined in `src/index.css`. Use these everywhere — do not hardcode colors.

| Token | Value | Use |
|---|---|---|
| `--f-brand` | `#0078d4` | Primary blue |
| `--f-bg1` | `#ffffff` | Panel backgrounds |
| `--f-bg2` | `#fafafa` | Plugin background |
| `--f-bg3/4/5` | `#f5/f0/eb` | Hover, row, border fills |
| `--f-fg1` | `#242424` | Primary text |
| `--f-fg2/3/4` | `#42/61/70` | Secondary, muted, disabled text |
| `--f-stroke1/2` | `#d1/e0` | Borders |

## Layout

```
.website                    ← full viewport, #dde3ea background
  .website-nav              ← 48px top bar (Meridian Group brand)
  .website-body             ← flex center, contains the app at 72% width
    .app-embed              ← 72% width, border-radius, shadow
      .app                  ← full height flex column
        TopBar              ← 48px
        .workspace          ← flex row, fills remaining height
          Sidebar           ← 268px (collapsible)
          EmailList         ← 260px fixed
          ReadingPane       ← flex: 1 (grows to fill)
          PluginPanel       ← 0 → 320px transition
```

Responsive breakpoints: 1200px (82%), 1024px (90%), 900px (hide icon rail), 768px (full mobile — plugin becomes bottom sheet).

## Mobile bottom sheet

At ≤768px, `.plugin-panel` switches to `position: fixed; bottom: 0; height: 0 → 65vh` with `border-radius: 14px 14px 0 0`. The drag handle is a CSS `::before` pseudo-element on `.plugin-header`. Do not add JS drag behavior — the CSS-only approach is intentional.

## Deployment

Every push to `main` deploys automatically via `.github/workflows/deploy.yml`. GitHub Pages source must be set to "GitHub Actions" in repo Settings → Pages.
