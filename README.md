# Justin Young — Personal Website

A clean, single-page academic website built with plain HTML, CSS, and a small
amount of JavaScript. No build step or dependencies required.

## Files

```
.
├── index.html          # Page content
├── css/style.css       # Styles (light + dark mode, responsive)
├── js/main.js          # Email/CV obfuscation + footer year
├── assets/
│   ├── favicon.svg      # Monogram favicon
│   └── profile.png      # <-- ADD YOUR PHOTO HERE (square works best)
├── .nojekyll           # Tells GitHub Pages to serve files as-is
└── README.md
```

## Before you publish

1. **Add your photo.** Drop a square PNG at `assets/profile.png`
   (roughly 400×400px or larger looks crisp on retina displays).
2. **(Optional) Add more links.** In `index.html`, uncomment the Google Scholar /
   GitHub list items in the header and fill in the URLs.

## Publish to GitHub Pages (username.github.io)

A user site lives in a repository named **exactly** `<your-username>.github.io`.

1. Create a new GitHub repository named `<your-username>.github.io`
   (replace with your real GitHub username).
2. Push these files to the `main` branch, e.g.:

   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```

3. In the repository, go to **Settings → Pages** and confirm the source is
   **Deploy from a branch → main → / (root)**.
4. Your site will be live at `https://<your-username>.github.io/` within a minute
   or two.

## Local preview

Open `index.html` directly in a browser, or run a tiny static server:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Notes

- The email address is assembled in `js/main.js` at runtime and never appears in
  the page source, which deters most automated scrapers. Update `EMAIL_USER` /
  `EMAIL_DOMAIN` there if your address changes.
- Dark mode follows the visitor's system preference automatically.
