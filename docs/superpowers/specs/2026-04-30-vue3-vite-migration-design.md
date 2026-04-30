# Vue 3 + Vite Migration Design

**Goal:** Rebuild the portfolio site in a new `new/` folder using Vue 3.5 + Vite 6, with all components rewritten to `<script setup>` Composition API, producing identical visual output. Output directory is `new/docs/` to match the existing GitHub Pages setup.

---

## Stack

| Concern | Old | New |
|---|---|---|
| Framework | Vue 2.6 | Vue 3.5 |
| Build tool | Webpack via @vue/cli-service 4 | Vite 6 |
| Sass | node-sass | sass (Dart Sass) |
| Animations | AOS 2.3 | AOS 2.3 (keep — TODO: replace with @vueuse/motion) |
| CSS reset | reset-css | reset-css |
| Linting | ESLint 7 + babel-eslint | ESLint 9 + @eslint/js + eslint-plugin-vue |
| Output dir | `docs/` | `new/docs/` |

---

## Project Structure

```
new/
├── index.html                         # Vite entry HTML
├── package.json
├── vite.config.js                     # Vite config (build.outDir: 'docs')
├── .eslintrc.cjs
├── public/                            # Static assets (favicon etc)
└── src/
    ├── main.js                        # App entry — createApp, AOS.init()
    ├── App.vue                        # Root component
    ├── assets/
    │   ├── materials/                 # Copied verbatim from old src/assets/materials
    │   └── svg/                      # Copied verbatim from old src/assets/svg
    └── dev/
        ├── components/
        │   ├── OverlayMenu.vue        # <script setup> — ref(overlayActive)
        │   └── Waves.vue             # <script setup> — defineProps({ darkWaves: Boolean })
        ├── sections/
        │   ├── Home.vue              # <script setup> — no state, template-only
        │   ├── Underground.vue       # <script setup> — no state, template-only
        │   ├── SkillCertificate.vue  # <script setup> — no state, template-only
        │   ├── AboutMe.vue           # <script setup> — no state, template-only
        │   ├── Projects.vue          # <script setup> — no state, template-only
        │   ├── ProjectsOverlay.vue   # <script setup> — no state, template-only
        │   ├── Contact.vue           # <script setup> — no state, template-only
        │   └── End.vue               # <script setup> — imports Waves
        └── scss/                     # Copied verbatim — zero changes needed
            ├── main.scss
            ├── coin.scss
            ├── navigation.scss
            ├── settings/
            │   ├── _reset.scss
            │   └── variables.scss
            └── components/
                ├── overlaymenu.scss
                └── waves.scss
            └── sections/
                ├── about-me.scss
                ├── contact.scss
                ├── end.scss
                ├── home.scss
                ├── projects.scss
                ├── skill-certificate.scss
                └── underground.scss
```

---

## Component Migration Rules

Every component follows the same pattern. No exceptions.

### Template
- Copy verbatim from old component.
- Asset import paths stay the same (`../../assets/...`). Vite resolves these identically to Webpack.
- `xlink:href` in SVG (used in `Waves.vue`) → replace with just `href` (Vue 3 / modern browsers don't need the namespace).

### Script
- Remove `export default { name, components, data, props, methods, mounted }` block entirely.
- Replace with `<script setup>`.
- `data() { return { x } }` → `const x = ref(initialValue)` (import `ref` from `vue`).
- `props: { darkWaves: Boolean }` → `defineProps({ darkWaves: Boolean })`.
- `components: { Foo }` → just `import Foo from '...'` (auto-registered in `<script setup>`).
- No `this.` references anywhere.

### Style
- Copy verbatim. All SCSS is in external files already — no `<style>` blocks to migrate except the empty one in `Waves.vue` (delete it).

---

## Key File Specs

### `new/index.html`
Standard Vite entry. Mount point `<div id="app"></div>`, script tag `<script type="module" src="/src/main.js"></script>`.

### `new/src/main.js`
```js
import { createApp } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import './dev/scss/main.scss'

// TODO: replace AOS with @vueuse/motion for Vue-native scroll animations
AOS.init()

createApp(App).mount('#app')
```

### `new/vite.config.js`
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
```

### `new/package.json` dependencies
```json
{
  "dependencies": {
    "aos": "^2.3.4",
    "reset-css": "^5.0.2",
    "vue": "^3.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.0",
    "sass": "^1.77.0",
    "vite": "^6.0.0",
    "eslint": "^9.0.0",
    "@eslint/js": "^9.0.0",
    "eslint-plugin-vue": "^9.26.0"
  }
}
```

---

## Vue 2 → Vue 3 Breaking Changes in This Codebase

| Issue | Where | Fix |
|---|---|---|
| `new Vue(...).$mount` | `main.js` | `createApp(App).mount('#app')` |
| `xlink:href` in SVG | `Waves.vue` | Change to `href` |
| `data()` reactive state | `OverlayMenu.vue` | `ref(false)` |
| `export default { components }` | All files | Remove — `<script setup>` auto-registers imports |
| Empty `<style>` block | `Waves.vue` | Delete |
| `// eslint-disable-next-line editor.codeActionsOnSave` comment | `OverlayMenu.vue`, `Navigation.vue` | Remove (invalid directive) |

---

## What Is NOT Migrated

- `Navigation.vue` — already commented out in `App.vue`, not used. Copy to `new/src/dev/Navigation.vue` as-is for reference but do not import it.
- `ProjectsOverlay.vue` — present in old codebase but not imported in `App.vue`. Copy as-is, do not import.

---

## Done Criteria

- `npm run build` inside `new/` exits 0 and writes files to `new/docs/`
- `npm run dev` inside `new/` starts the dev server with no console errors
- Visual output in the browser is identical to the old site
- No commit, push, or publish performed
