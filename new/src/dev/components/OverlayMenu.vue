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
