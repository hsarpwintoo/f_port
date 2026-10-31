# Personal Portfolio

A responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript for the Let's Tech Club Fullstack Development course. The website uses no frontend frameworks, build tools, or backend services.

## Overview

This portfolio introduces me as a Software Engineering student at Mae Fah Luang University who is interested in full-stack development and UI/UX design.

It includes:

- A personal introduction and About section
- Technical skills and currently learning topics
- Project cards with category filters
- Light and dark themes
- A responsive mobile navigation menu
- A contact section with client-side form validation
- Links to my GitHub and LinkedIn profiles

The website is designed to work on desktop, tablet, and mobile screens.

## Technologies Used

- **HTML5** — Page structure and semantic elements
- **CSS3** — Styling, responsive layouts, and light/dark themes
- **JavaScript** — Project rendering, category filters, mobile navigation, theme persistence, and form validation
- **localStorage** — Saving the selected theme preference
- **GitHub Pages** — Static website hosting

## Live Website

Visit the deployed portfolio:

[https://hsarpwintoo.github.io/f_port/](https://hsarpwintoo.github.io/f_port/)

## How to Run Locally

You can open `index.html` directly in a browser. However, using a local server is recommended for testing the website.

### Option 1: Python HTTP Server

From the project folder, run:

```bash
python -m http.server 8000
```

If your system uses `python3` instead, run:

```bash
python3 -m http.server 8000
```

Then open the following address in your browser:

[http://localhost:8000](http://localhost:8000)

### Option 2: VS Code Live Server

Open the project folder in Visual Studio Code, start the Live Server extension, and open the local website in your browser.

## Project Structure

```text
f_port/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── studyzen-preview.png
│   ├── enertrack-preview.png
│   └── mypo-preview.png
├── screenshots/
│   ├── portfolio-desktop.png
│   └── portfolio-mobile.png
└── README.md
```

The project structure above includes the files and folders currently used in the repository.

## Known Limitations

- **Contact form:** The form validates user input but does not send or store messages. Visitors can use the email link provided in the Contact section.
- **Static website:** The portfolio does not use a backend or database.
- **Project functionality:** Each project link leads to its corresponding demo, design, API endpoint, or source repository, depending on the project.
- **Browser storage:** The theme preference is stored locally in the visitor's browser.

## Credits

- Built as part of the Let's Tech Club Fullstack Development course.
- Technical references: [MDN Web Docs](https://developer.mozilla.org/) for HTML, CSS, JavaScript, DOM manipulation, accessibility, and `localStorage`.
