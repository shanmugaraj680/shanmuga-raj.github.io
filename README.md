# Shanmuga Raj — Portfolio

A simple, dark, modern personal portfolio built with plain HTML5, CSS3 and vanilla JavaScript. No frameworks, no backend — ready to host on GitHub Pages.

## Structure

```
index.html          → all page content/sections
style.css            → theme, layout, animations
script.js            → interactivity (typing effect, filters, nav, theme toggle)
assets/
  resume/            → put your resume PDF here
  images/            → put any images here (profile photo, project screenshots, etc.)
```

## How to customize

| What to change            | Where |
|---------------------------|-------|
| Name, title, hero copy    | `index.html` → `<header class="hero">` |
| Typing animation phrases  | `script.js` → `typingPhrases` array |
| About text / stats        | `index.html` → `#about` section |
| Skills                    | `index.html` → `#skills` section (`.skill-card` blocks) |
| Experience timeline       | `index.html` → `#experience` section |
| Projects                  | `script.js` → `PROJECTS` array (title, tools, category, desc, github link) |
| Contact links             | `index.html` → `#contact` section, and hero social icons |
| Resume file               | Replace `assets/resume/Shanmuga_Raj_Resume.pdf` with your real PDF (keep the same filename, or update the `href` in the hero "Download Resume" button) |
| Colors / theme            | `style.css` → `:root` and `[data-theme="light"]` CSS variables |

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `your-username.github.io` for a root site, or any name for a project site).
2. Push these files to the repo root (or to a `docs/` folder — your choice).
3. In the repo, go to **Settings → Pages**, set the source branch (usually `main`) and folder (`/` or `/docs`).
4. Your site will be live at `https://your-username.github.io/repo-name/` within a minute or two.

## Notes

- All GitHub/LinkedIn/email links in the HTML are placeholders (`your-github`, `your-linkedin`, `your.email@example.com`) — search and replace them with your real profile URLs.
- The project GitHub links in `script.js` are placeholders too — update each `github` field once your repos are live.
- Dark/light mode is remembered per-browser using `localStorage`.
