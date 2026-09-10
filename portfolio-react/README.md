# Anupama Pandey — Portfolio

React + Vite portfolio site (no Tailwind, plain CSS, "engineering blueprint" theme).

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy (Netlify)

1. Push this folder to a new GitHub repo (e.g. `portfolio`).
2. On [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project** → pick the repo.
3. Build command: `npm run build`, publish directory: `dist`.
4. Deploy.

## Deploy (Vercel)

1. Push to GitHub.
2. On [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: Vite (auto-detected). Deploy.

## Editing content

All copy — project descriptions, skills, contact info — lives in `src/App.jsx`
in the `PROJECTS` and `SKILLS` arrays at the top of the file. Colors and fonts
are CSS variables in `src/index.css` under `:root`.
