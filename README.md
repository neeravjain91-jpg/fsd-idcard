# FSDAIML

This repository mirrors the source exercises from [ishanp-exe/FSDAIML](https://github.com/ishanp-exe/FSDAIML).

## Run the React/Vite application

The React app is inside the `reactvite` directory. Run the commands from that directory:

```bash
cd reactvite
npm install
npm run dev
```

Vite prints a local URL (normally `http://localhost:5173/`). Open that URL in your browser.

## Production build

```bash
cd reactvite
npm run build
npm run preview
```

## Default screen

The application renders `SampleUseEffect` by default. Its **Counter** button increases the counter by 5, and its **Pointer** button decreases the pointer by 5. The effect logs both values when either state changes.

To view a different exercise, edit `reactvite/src/App.jsx` and render the component you want to try. Keep imports and file names consistent with the case used on disk.

## Repository layout

- `reactvite/` — React and Vite application
- `reactdom/` — standalone React DOM exercise
- Root-level HTML and JavaScript files — additional practice exercises
