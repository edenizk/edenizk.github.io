# Vue 3 + Vite Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio site in `new/` using Vue 3.5 + Vite 6 with all components in `<script setup>`, producing identical visual output, outputting to `new/docs/`.

**Architecture:** Scaffold a fresh Vite + Vue 3 project in `new/`, copy all assets and SCSS verbatim, then migrate each Vue component from Options API to `<script setup>` Composition API one at a time. No commits, no push, no publish.

**Tech Stack:** Vue 3.5, Vite 6, @vitejs/plugin-vue, sass (Dart Sass), AOS 2.3, reset-css, ESLint 9

---

## File Map

| File | Action |
|------|--------|
| `new/index.html` | Create |
| `new/package.json` | Create |
| `new/vite.config.js` | Create |
| `new/.eslintrc.cjs` | Create |
| `new/src/main.js` | Create |
| `new/src/App.vue` | Create |
| `new/src/assets/` | Copy from `src/assets/` verbatim |
| `new/src/dev/scss/` | Copy from `src/dev/scss/` verbatim |
| `new/src/dev/components/OverlayMenu.vue` | Create (script setup, ref) |
| `new/src/dev/components/Waves.vue` | Create (script setup, defineProps, xlink→href) |
| `new/src/dev/sections/Home.vue` | Create (script setup, template-only) |
| `new/src/dev/sections/Underground.vue` | Create (script setup, template-only) |
| `new/src/dev/sections/SkillCertificate.vue` | Create (script setup, template-only) |
| `new/src/dev/sections/AboutMe.vue` | Create (script setup, template-only) |
| `new/src/dev/sections/Projects.vue` | Create (script setup, template-only) |
| `new/src/dev/sections/ProjectsOverlay.vue` | Create (script setup, not imported) |
| `new/src/dev/sections/Contact.vue` | Create (script setup, template-only) |
| `new/src/dev/sections/End.vue` | Create (script setup, imports Waves) |
| `new/src/dev/Navigation.vue` | Create (script setup, not imported) |

---

### Task 1: Scaffold project structure and config files

**Files:**
- Create: `new/index.html`
- Create: `new/package.json`
- Create: `new/vite.config.js`
- Create: `new/.eslintrc.cjs`

- [ ] **Step 1: Create the `new/` directory**

```bash
mkdir -p /Users/deniz/repos/edenizk.github.io/new/src/dev/components
mkdir -p /Users/deniz/repos/edenizk.github.io/new/src/dev/sections
mkdir -p /Users/deniz/repos/edenizk.github.io/new/public
```

- [ ] **Step 2: Create `new/index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ergin Deniz Kösecioğlu</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

- [ ] **Step 3: Create `new/package.json`**

```json
{
  "name": "portfolio-vue3",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src --ext .vue,.js"
  },
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

- [ ] **Step 4: Create `new/vite.config.js`**

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

- [ ] **Step 5: Create `new/.eslintrc.cjs`**

```js
module.exports = {
  root: true,
  env: { browser: true, es2022: true },
  extends: ['plugin:vue/vue3-recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
}
```

- [ ] **Step 6: Install dependencies**

```bash
cd /Users/deniz/repos/edenizk.github.io/new && npm install
```

Expected: `node_modules/` created, no errors. Warnings about peer deps are OK.

---

### Task 2: Copy assets and SCSS

**Files:**
- Create: `new/src/assets/` (copy)
- Create: `new/src/dev/scss/` (copy)

- [ ] **Step 1: Copy all assets verbatim**

```bash
cp -r /Users/deniz/repos/edenizk.github.io/src/assets /Users/deniz/repos/edenizk.github.io/new/src/assets
```

- [ ] **Step 2: Copy all SCSS verbatim**

```bash
cp -r /Users/deniz/repos/edenizk.github.io/src/dev/scss /Users/deniz/repos/edenizk.github.io/new/src/dev/scss
```

- [ ] **Step 3: Verify copy**

```bash
find /Users/deniz/repos/edenizk.github.io/new/src -type f | sort
```

Expected: all `.svg`, `.png`, `.jpg`, `.scss` files present under `new/src/`.

---

### Task 3: Create `main.js` and `App.vue`

**Files:**
- Create: `new/src/main.js`
- Create: `new/src/App.vue`

- [ ] **Step 1: Create `new/src/main.js`**

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

- [ ] **Step 2: Create `new/src/App.vue`**

```vue
<template>
  <div id="app">
    <OverlayMenu />
    <Home />
    <Underground />
    <SkillCertificate />
    <AboutMe />
    <Projects />
    <Contact />
    <End />
  </div>
</template>

<script setup>
import OverlayMenu from './dev/components/OverlayMenu.vue'
import Home from './dev/sections/Home.vue'
import Underground from './dev/sections/Underground.vue'
import SkillCertificate from './dev/sections/SkillCertificate.vue'
import AboutMe from './dev/sections/AboutMe.vue'
import Projects from './dev/sections/Projects.vue'
import Contact from './dev/sections/Contact.vue'
import End from './dev/sections/End.vue'
</script>
```

---

### Task 4: Create `Waves.vue` component

**Files:**
- Create: `new/src/dev/components/Waves.vue`

`★ Insight ─────────────────────────────────────`
`xlink:href` was an SVG 1.1 namespace requirement. Modern browsers and Vue 3`
`both support plain `href` on `<use>` elements. `xlink:href` still works but`
`triggers deprecation warnings in some parsers.`
`─────────────────────────────────────────────────`

- [ ] **Step 1: Create `new/src/dev/components/Waves.vue`**

```vue
<template>
  <div class="waves" :class="darkWaves ? 'waves--dark' : ''">
    <div class="waves__sea"></div>
    <svg
      class="waves__waves"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="waves__waveList">
        <use href="#gentle-wave" x="48" y="0" />
        <use href="#gentle-wave" x="48" y="3" />
        <use href="#gentle-wave" x="48" y="5" />
        <use href="#gentle-wave" x="48" y="7" />
      </g>
    </svg>
  </div>
</template>

<script setup>
defineProps({
  darkWaves: Boolean,
})
</script>
```

---

### Task 5: Create `OverlayMenu.vue` component

**Files:**
- Create: `new/src/dev/components/OverlayMenu.vue`

- [ ] **Step 1: Create `new/src/dev/components/OverlayMenu.vue`**

```vue
<template>
  <header class="overlay-menu">
    <span class="overlay-menu__menuIcon" @click="overlayActive = true">
      &#9776;
    </span>

    <div class="overlay-menu__overlay" :class="{ 'overlay-menu__overlay--active': overlayActive }">
      <div @click="overlayActive = false" class="overlay-menu__closebtn">
        &times;
      </div>
      <nav class="overlay-menu__nav">
        <a class="overlay-menu__item" @click="overlayActive = false" href="#home">Home</a>
        <a class="overlay-menu__item" @click="overlayActive = false" href="#skills_and_certifications">Qualifications</a>
        <a class="overlay-menu__item" @click="overlayActive = false" href="#about_me">About Me</a>
        <a class="overlay-menu__item" @click="overlayActive = false" href="#projects">Projects</a>
        <a class="overlay-menu__item" @click="overlayActive = false" href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const overlayActive = ref(false)
</script>
```

---

### Task 6: Create template-only section components

These components have no state or logic — pure templates copied from the old project.

**Files:**
- Create: `new/src/dev/sections/Home.vue`
- Create: `new/src/dev/sections/Underground.vue`
- Create: `new/src/dev/sections/SkillCertificate.vue`
- Create: `new/src/dev/sections/AboutMe.vue`
- Create: `new/src/dev/sections/Projects.vue`
- Create: `new/src/dev/sections/Contact.vue`

- [ ] **Step 1: Create `new/src/dev/sections/Home.vue`**

```vue
<template>
  <section class="home" id="home">
    <div class="home__title" data-aos="fade-up" data-aos-duration="3000">
      Ergin Deniz <br />Kösecioğlu<br />
      <span>- Web Dev -</span>
    </div>
    <img
      class="home__sun"
      data-aos="fade-up-left"
      data-aos-duration="1500"
      data-aos-once="true"
      src="../../assets/svg/sun.svg"
      alt="sun"
    />
    <img
      class="home__city"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
      src="../../assets/svg/city4.svg"
      alt="city"
      data-aos-offset="-50"
    />
    <Waves />
    <img
      class="home__front"
      src="../../assets/svg/front_bank.svg"
      alt="bench and ground"
    />
    <div class="home__down-arrow">
      <a href="#underground" aria-label="Continue">
        <span></span>
      </a>
    </div>
  </section>
</template>

<script setup>
import Waves from '../components/Waves.vue'
</script>
```

- [ ] **Step 2: Create `new/src/dev/sections/Underground.vue`**

```vue
<template>
  <section class="undergrd">
    <img
      class="undergrd__image"
      src="../../assets/svg/earth_with_pipes.svg"
      alt="earth with pipes"
    />
    <div class="undergrd__main" id="underground">
      <div class="undergrd__text" data-aos="flip-up" data-aos-duration="2000" data-aos-once="true">
        <h2>
          Thank You For Visiting My
          <br />
          <span>Portfolio.</span>
        </h2>
      </div>
      <a
        class="undergrd__chest"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-once="true"
        href="https://youtu.be/sIhYExeApXE"
        target="_blank"
        src="../../assets/svg/chest_idle.svg"
      >
        <span class="undergrd__chestText">Hey! wanna see my video? 😊</span>
      </a>
      <img
        class="undergrd__stone"
        data-aos="fade-left"
        data-aos-easing="ease-in-sine"
        data-aos-offset="-50"
        data-aos-once="true"
        src="../../assets/svg/stone.svg"
        alt="stones"
      />
    </div>
  </section>
</template>

<script setup>
</script>
```

- [ ] **Step 3: Create `new/src/dev/sections/SkillCertificate.vue`**

```vue
<template>
  <section id="skills_and_certifications" class="skill-certificate">
    <div class="skill-certificate__skill-wrapper">
      <div class="skill-certificate__text">Skills</div>
      <div class="skill-certificate__skills" data-aos="zoom-in" data-aos-once="true">
        <div class="coin_text">HTML/(S)CSS</div>
        <div class="coin"></div>
        <div class="coin"></div>
        <div class="coin"></div>
        <div class="coin"></div>
      </div>
      <div class="skill-certificate__skills" data-aos="zoom-in" data-aos-delay="200" data-aos-once="true">
        <div class="coin_text">PHP</div>
        <div class="coin"></div>
        <div class="coin"></div>
        <div class="coin"></div>
        <div class="coin"></div>
      </div>
      <div class="skill-certificate__skills" data-aos="zoom-in" data-aos-delay="400" data-aos-once="true">
        <div class="coin_text">Wordpress</div>
        <div class="coin"></div>
        <div class="coin"></div>
        <div class="coin"></div>
      </div>
      <div class="skill-certificate__skills" data-aos="zoom-in" data-aos-delay="600" data-aos-once="true">
        <div class="coin_text">JS</div>
        <div class="coin"></div>
        <div class="coin"></div>
        <div class="coin"></div>
        <div class="coin"></div>
      </div>
      <div class="skill-certificate__skills" data-aos="zoom-in" data-aos-delay="800" data-aos-once="true">
        <div class="coin_text">React/Next.js</div>
        <div class="coin"></div>
        <div class="coin"></div>
        <div class="coin"></div>
      </div>
      <div class="skill-certificate__skills" data-aos="zoom-in" data-aos-delay="1000" data-aos-once="true">
        <div class="coin_text">Vue/Nuxt.js</div>
        <div class="coin"></div>
        <div class="coin"></div>
        <div class="coin"></div>
      </div>
      <div class="skill-certificate__skills" data-aos="zoom-in" data-aos-delay="1200" data-aos-once="true">
        <div class="coin_text">Flutter/Dart</div>
        <div class="coin"></div>
        <div class="coin"></div>
      </div>
    </div>
    <img
      id="green_pipe"
      class="skill-certificate__pipe"
      src="../../assets/materials/skills_certificates/green_pipe.svg"
      alt="green pipe"
    />
    <div class="skill-certificate__certificates-wrapper">
      <div class="skill-certificate__text">Certificates</div>
      <a target="_blank" href="https://www.freecodecamp.org/certification/edenizk/responsive-web-design" data-aos="zoom-in" data-aos-once="true">
        <img class="skill-certificate__certificate" src="../../assets/materials/certificates/datacamp_certificate5.svg" aria-label="freecodecamp certificate" />
      </a>
      <a target="_blank" href="https://drive.google.com/file/d/1AnP60QV4A7FheGgrNiRIqDConPRAyShK/view?usp=sharing" data-aos="zoom-in" data-aos-delay="200" data-aos-once="true">
        <img class="skill-certificate__certificate" src="../../assets/materials/certificates/datacamp_certificate4.svg" aria-label="scrum certificate" />
      </a>
      <a target="_blank" href="https://www.datacamp.com/statement-of-accomplishment/course/2d0975892b23bdbfd3de44028229f3cfbcff121f" data-aos="zoom-in" data-aos-delay="400" data-aos-offset="-50" data-aos-once="true">
        <img class="skill-certificate__certificate" src="../../assets/materials/certificates/datacamp_certificate1.svg" aria-label="datacamp certificate 1" />
      </a>
      <a target="_blank" href="https://www.datacamp.com/statement-of-accomplishment/course/be0ce43746c9cf3d0f0dfd55ef663f810042f8f9" data-aos="zoom-in" data-aos-delay="600" data-aos-offset="-50" data-aos-once="true">
        <img class="skill-certificate__certificate" src="../../assets/materials/certificates/datacamp_certificate2.svg" aria-label="datacamp certificate 2" />
      </a>
      <a target="_blank" href="https://www.datacamp.com/statement-of-accomplishment/course/98327bb4212ce8de6aedac926079fb0c0f537fc4" data-aos="zoom-in" data-aos-delay="800" data-aos-offset="-50" data-aos-once="true">
        <img class="skill-certificate__certificate" src="../../assets/materials/certificates/datacamp_certificate3.svg" aria-label="datacamp certificate 3" />
      </a>
      <a target="_blank" href="https://analytics.google.com/analytics/academy/certificate/vSyxlz4QTmySfxl24TB1KQ" data-aos="zoom-in" data-aos-delay="1000" data-aos-offset="-50" data-aos-once="true">
        <img class="skill-certificate__certificate" src="../../assets/materials/certificates/google_analytics.svg" aria-label="Google Analytics Certificate" />
      </a>
    </div>
    <img
      class="skill-certificate__stone"
      data-aos="fade-left"
      data-aos-easing="ease-in-sine"
      data-aos-offset="-50"
      src="../../assets/svg/stone.svg"
      alt="stones"
      data-aos-once="true"
    />
  </section>
</template>

<script setup>
</script>
```

- [ ] **Step 4: Create `new/src/dev/sections/AboutMe.vue`**

```vue
<template>
  <section id="about_me" class="about-me space_sections">
    <img
      class="about-me__stars about-me__stars--left stars"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-once="true"
      src="../../assets/materials/about_me/left_side.svg"
      alt="stars"
    />
    <img
      class="about-me__comet"
      data-aos="fade-down-left"
      data-aos-delay="300"
      data-aos-duration="2000"
      data-aos-once="true"
      src="../../assets/materials/projects/comet.svg"
      alt="comet"
    />
    <div class="about-me__title">About Me</div>
    <div
      class="about-me__text"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      My name is Ergin Deniz Kösecioğlu,
      <br />but... <br />You can call me
      <span style="color: #0bffff">Deniz</span> 😋. <br />I am an Web Dev who
      is a tireless seeker of knowledge and looking for new challenges in
      programming. also trying to learn how to make good design.
      <br />
      <br />I am also an animal lover, enjoy playing ukulele and like to make
      2D/3D art in free time.
    </div>
    <img
      class="about-me__stars about-me__stars--right stars"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-delay="300"
      data-aos-once="true"
      src="../../assets/materials/about_me/rightside_stars.svg"
      alt="stars"
    />
  </section>
</template>

<script setup>
</script>
```

- [ ] **Step 5: Create `new/src/dev/sections/Projects.vue`**

```vue
<template>
  <section class="projects space_sections" id="projects">
    <img
      class="projects__stars projects__stars--left stars"
      src="../../assets/materials/projects/stars3.svg"
      alt="stars"
      data-aos="stars"
      data-aos-once="true"
      data-aos-duration="5000"
    />
    <div class="projects__title">Projects</div>
    <img
      class="projects__stars projects__stars--right stars"
      src="../../assets/materials/projects/stars3.svg"
      alt="stars"
      data-aos="stars"
      data-aos-once="true"
      data-aos-duration="5000"
    />
    <img
      id="project_comet"
      class="comet"
      data-aos="fade-down-left"
      data-aos-delay="300"
      data-aos-once="true"
      data-aos-duration="2000"
      src="../../assets/materials/projects/comet.svg"
      alt="comet"
    />
    <div
      id="about_me_text"
      class="projects__projectsWrapper"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <p class="projects__tempText">
        Currently under construction but you can visit my GitHub page for my
        projects, or see my pens on codepen.io :)
      </p>
      <div class="projects__links">
        <a class="contact__icon" target="_blank" href="https://github.com/edenizk" aria-label="link to my github">
          <img src="../../assets/materials/contacts/github.svg" alt="Github" />
        </a>
        <a class="contact__icon" target="_blank" href="https://codepen.io/collection/APzyGM" aria-label="link to my codepen">
          <img src="../../assets/materials/contacts/codepen.svg" alt="Codepen" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
```

- [ ] **Step 6: Create `new/src/dev/sections/Contact.vue`**

```vue
<template>
  <section class="space_sections contact" id="contact">
    <img
      class="contact__stars stars"
      style="top: 5vh; right: 5vh; transform: rotate(180deg)"
      src="../../assets/materials/contacts/contact_stars.svg"
      alt="stars"
    />
    <img
      class="contact__stars stars"
      style="left: 0vh; bottom: 0"
      src="../../assets/materials/contacts/contact_stars.svg"
      alt="stars"
    />
    <div
      id="contact_text"
      class="contact__text"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
    >
      <div id="title_contact" class="contact__title">
        You Have
        <br />A Cool Project? <br />Just Contact Me 😁
      </div>
      <br />
      <a href="mailto:ergindenizkosecioglu@gmail.com" id="my_email" class="contact__email">
        ergindenizkosecioglu@gmail.com
      </a>
      <div id="contact_icons" class="contact__icons">
        <a class="contact__icon" target="_blank" href="https://github.com/edenizk" aria-label="link to my github">
          <img src="../../assets/materials/contacts/git.svg" alt="github" />
        </a>
        <a class="contact__icon" target="_blank" href="https://www.linkedin.com/in/edkos/" aria-label="link to my linkedin">
          <img src="../../assets/materials/contacts/linkedin.svg" alt="linkedin" />
        </a>
        <a class="contact__icon" target="_blank" href="https://www.artstation.com/dkpixx" aria-label="link to my artstation">
          <img src="../../assets/materials/contacts/artstation.svg" alt="artstation" />
        </a>
      </div>
    </div>
    <img
      id="contact_moon"
      class="contact__moon"
      src="../../assets/materials/contacts/moon.svg"
      alt="moon"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-once="true"
    />
  </section>
</template>

<script setup>
</script>
```

---

### Task 7: Create `End.vue` and unused components

**Files:**
- Create: `new/src/dev/sections/End.vue`
- Create: `new/src/dev/sections/ProjectsOverlay.vue`
- Create: `new/src/dev/Navigation.vue`

- [ ] **Step 1: Create `new/src/dev/sections/End.vue`**

```vue
<template>
  <section class="space_sections end" id="end">
    <div
      class="home__title end__title"
      style="color: white"
      data-aos="fade-up"
      data-aos-duration="3000"
      data-aos-once="true"
    >
      GoodBye
    </div>
    <img
      class="stars"
      style="top: 0; right: 120vh; transform: rotate(-130deg)"
      src="../../assets/materials/projects/stars3.svg"
      alt="stars"
    />
    <img
      class="stars"
      style="top: 0; right: 35vh; transform: rotate(-130deg)"
      src="../../assets/materials/projects/stars3.svg"
      alt="stars"
    />
    <img
      id="end_comet"
      src="../../assets/materials/projects/comet.svg"
      alt="comet"
      data-aos="fade-down-left"
      data-aos-delay="300"
      data-aos-duration="2000"
      data-aos-once="true"
    />
    <img
      class="home__sun"
      src="../../assets/materials/contacts/moon.svg"
      alt="sun"
      data-aos="fade-up-left"
      data-aos-duration="1500"
      data-aos-once="true"
    />
    <img
      class="home__city"
      src="../../assets/materials/end/city_night.svg"
      alt="city"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
    />
    <Waves :darkWaves="true" />
    <img
      class="home__front"
      style="z-index: 2"
      src="../../assets/materials/intro/front_bank.svg"
      alt="bench and ground"
    />
  </section>
</template>

<script setup>
import Waves from '../components/Waves.vue'
</script>
```

- [ ] **Step 2: Create `new/src/dev/sections/ProjectsOverlay.vue`** (not imported — kept for reference)

```vue
<template>
  <div id="projects_overlay">
    <div class="close_project_btn" onclick="closeProjectOverlay()">&times;</div>
    <div id="project_head_info">
      <h1 id="project_title"></h1>
      <img id="project_logo" src="" alt="project logo" />
      <div id="project_used_tech">Used Technologies:</div>
      <div id="project_languages"></div>
    </div>
    <div id="project_desc"><span>Describtion</span><br /><br /></div>
    <a id="project_git_link" href="" target="_blank">Source Code</a>
  </div>
</template>

<script setup>
</script>
```

- [ ] **Step 3: Create `new/src/dev/Navigation.vue`** (not imported — kept for reference)

```vue
<template>
  <header class="nav">
    <a class="nav__link" href="#home">
      <img class="nav__icon" id="home_icon" src="../assets/svg/home.svg" alt="home" />
      <span class="nav__text">Home</span>
    </a>
    <a class="nav__link" href="#skills_and_certifications">
      <img class="nav__icon" id="qualifications_icon" src="../assets/svg/qualifications_icon.svg" alt="Qualifications" />
      <span class="nav__text">Qualifications</span>
    </a>
    <a class="nav__link" href="#about_me">
      <img class="nav__icon" id="me_icon" src="../assets/svg/me.svg" alt="about me" />
      <span class="nav__text">About Me</span>
    </a>
    <a class="nav__link" href="#projects">
      <img class="nav__icon" id="project_icon" src="../assets/svg/projects.svg" alt="my projects" />
      <span class="nav__text">Projects</span>
    </a>
    <a class="nav__link" href="#contact">
      <img class="nav__icon" id="contact_icon" src="../assets/svg/contact.svg" alt="contacts" />
      <span class="nav__text">Contact</span>
    </a>
  </header>
</template>

<script setup>
</script>
```

---

### Task 8: Verify dev server and production build

**Files:** None — verification only.

- [ ] **Step 1: Run the dev server and check for errors**

```bash
cd /Users/deniz/repos/edenizk.github.io/new && timeout 20 npm run dev 2>&1 || true
```

Expected output includes:
```
  VITE v6.x.x  ready in xxx ms
  ➜  Local:   http://localhost:5173/
```

No `ERROR` lines. If errors appear, see the troubleshooting guide below.

- [ ] **Step 2: Run the production build**

```bash
cd /Users/deniz/repos/edenizk.github.io/new && npm run build 2>&1
```

Expected:
```
✓ built in Xs
```

And `new/docs/` directory exists with `index.html` and asset files.

- [ ] **Step 3: Verify output directory**

```bash
ls /Users/deniz/repos/edenizk.github.io/new/docs/
```

Expected: `index.html`, `assets/` folder.

---

### Task 9: Troubleshooting guide (use if Task 8 fails)

- [ ] **SCSS import error (`Cannot find module 'sass'`)**

```bash
cd /Users/deniz/repos/edenizk.github.io/new && npm install --save-dev sass
```

- [ ] **`@use` / `@import` SCSS deprecation warnings**

Dart Sass 1.77+ warns on `@import`. These are warnings, not errors — the build still succeeds. Ignore for now.

- [ ] **Asset 404 in browser (images not loading)**

Vite serves assets from `public/` at root or from `src/assets/` via relative imports. If images show as broken, check that `src` paths in templates use `../../assets/...` (relative) not `/assets/...` (absolute). All templates in this plan already use relative paths — no change needed.

- [ ] **`xlink:href` warning in console**

Already fixed in `Waves.vue` (Task 4). If it appears elsewhere, search for `xlink:href` and replace with `href`.

- [ ] **`[Vue warn]: Component is missing template or render function`**

Check that every `.vue` file has a `<template>` block. Empty `<script setup>` blocks with no template cause this.

- [ ] **ESLint errors on `<script setup>` with empty body**

Empty `<script setup>` blocks are valid Vue 3 syntax but some ESLint configs flag them. Either remove the empty `<script setup>` block entirely from template-only components, or ignore the warning. Removing is cleaner:

For components with no imports or reactive state (Underground, SkillCertificate, AboutMe, Projects, Contact), remove the `<script setup></script>` block entirely — Vue 3 + Vite handles template-only SFCs fine.
