# Personal Portfolio

A responsive personal portfolio built with pure HTML, CSS and vanilla JavaScript for the Let's Tech Club Fullstack Development course. No frameworks, no build step, no backend.

## Overview

The page introduces me, lists my skills (including what I am still learning), shows practice projects with category filters, and has a contact section. It works on phone, tablet and desktop.

## How to run

Option 1: open `index.html` directly in a browser.

Option 2 (recommended, needed to test theme persistence on one address):

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000
```

Or use the VS Code "Live Server" extension.

## Project structure

```
index.html        Page content and semantic structure
css/style.css     All styles, responsive rules, light and dark themes
js/main.js        Project data, card rendering, filters, menu, theme, form
assets/           Local project preview images
README.md         This file
screenshots/      Desktop and mobile screenshots
```

## Required features completed

- [x] Responsive one-page layout with header, hero, about, skills, projects, contact, footer
- [x] Mobile navigation (button with aria-expanded, closes on link click and Escape, hidden links not tabbable)
- [x] Contact form validation (name, email, message 20 to 500 trimmed characters, inline errors, focus on first invalid field, live character count, demo-only status message)
- [x] Project cards rendered from a JavaScript array, with All plus category filters and visible result count
- [x] Light and dark theme saved in localStorage, with a fallback when storage is unavailable

## Known limitations

- The contact form is a front-end demo only; it does not send or save messages. Use the email link instead.
- Project links in the JavaScript data point to the current project demos and repositories; profile/contact links should be reviewed before publishing.

## Credits

- All code written by me. No outside images or templates used.
- References: MDN Web Docs (HTML, CSS, DOM, localStorage, ARIA).
