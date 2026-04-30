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
