# liv.town

## Project structure

Inside of this Astro project, you'll see the following folders and files, these represent components and pages:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Greeting.jsx
│   │   └── Heading.astro
│   │   └── NormalLink.astro
│   │   └── Paragraph.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn`                    | Installs dependencies                            |
| `yarn run dev`            | Starts local dev server at `localhost:4321`      |
| `yarn astro build`        | Build your production site to `./dist/`          |
| `ynpm astro preview`      | Preview your build locally, before deploying     |
| `ynpm astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `ynpm astro -- --help`    | Get help using the Astro CLI                     |
