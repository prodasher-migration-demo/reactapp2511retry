# React Task Tracker

A clean, minimal sample **React 18 + Vite** application for managing tasks. It shows
core React patterns — components, props, state, a custom hook, derived data with
`useMemo` — plus unit tests, CI and one-click deployment to GitHub Pages.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

## Features

- Add tasks with a priority (low / medium / high)
- Mark tasks complete, delete them, or clear all completed
- Filter by **All**, **Active** or **Completed**
- Tasks persist in the browser via `localStorage`
- Accessible markup (labels, `aria-pressed`, `aria-label`)
- Unit tests with Vitest + React Testing Library
- GitHub Actions for CI and GitHub Pages deployment

## Getting started

**Prerequisites:** Node.js 18 or later and npm.

```bash
git clone https://github.com/<your-username>/react-task-tracker.git
cd react-task-tracker
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Scripts

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start the development server             |
| `npm run build`      | Build for production into `dist/`        |
| `npm run preview`    | Preview the production build locally     |
| `npm test`           | Run the unit tests once                  |
| `npm run test:watch` | Run tests in watch mode                  |

## Project structure

```
react-task-tracker/
├── .github/workflows/
│   ├── ci.yml              # Test + build on every push / PR
│   └── deploy.yml          # Deploy to GitHub Pages on push to main
├── public/
│   └── favicon.svg
├── src/
│   ├── __tests__/
│   │   └── App.test.jsx
│   ├── components/
│   │   ├── FilterBar.jsx
│   │   ├── Header.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── setupTests.js
├── index.html
├── package.json
├── vite.config.js
├── LICENSE
└── README.md
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: React Task Tracker"
git branch -M main
git remote add origin https://github.com/<your-username>/react-task-tracker.git
git push -u origin main
```

## Deploy to GitHub Pages

1. In your repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`. The *Deploy to GitHub Pages* workflow builds and publishes the app to
   `https://<your-username>.github.io/<repo-name>/`.

The workflow sets `VITE_BASE_PATH` to your repository name automatically, so asset paths work.

## Contributing

1. Fork the repo and create a branch: `git checkout -b feature/my-change`
2. Commit your changes: `git commit -m "Add my change"`
3. Push and open a pull request.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
