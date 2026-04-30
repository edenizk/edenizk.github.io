# edenizk.github.io

Personal portfolio site for Ergin Deniz Kösecioğlu.

## Architecture

Two codebases exist in this repo. **Active development happens in `/new`.**

| Directory | Stack | Status |
|---|---|---|
| `src/` | Vue 2, Webpack, node-sass | Legacy — being phased out |
| `new/` | Vue 3, Vite, sass | Active — all new work goes here |

## Commands

### Active codebase (`/new`)
```bash
cd new
npm run dev      # Dev server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Lint
```

### Legacy codebase (root)
```bash
npm run serve    # Dev server
npm run build    # Production build
npm run lint     # Lint
```

## Structure (`/new/src`)

```
src/
  dev/
    sections/     # Page sections (Home, AboutMe, Projects, SkillCertificate, Contact, …)
    components/   # Shared components (Waves, OverlayMenu, Navigation)
    scss/
      sections/   # Per-section SCSS (BEM)
      settings/   # Variables, reset
  assets/
    materials/    # SVG assets organised by section
```

## Key Notes

- SCSS uses BEM naming. Section styles live in `src/dev/scss/sections/<section>.scss`.
- `new/src/dev/scss/settings/variables.scss` defines all colours and breakpoints.
- No test suite is configured.
