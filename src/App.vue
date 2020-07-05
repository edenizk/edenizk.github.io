<template>
  <div id="app">
    <OverlayMenu/>
    <Home msg="Welcome to Your Home App"/>
    <Underground/>
    <SkillCertificate/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    <End/>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Navigation from './dev/Navigation.vue';
import OverlayMenu from './dev/components/OverlayMenu.vue';
import Home from './dev/sections/Home.vue';
import Underground from './dev/sections/Underground.vue';
import SkillCertificate from './dev/sections/SkillCertificate.vue';
import AboutMe from './dev/sections/AboutMe.vue';
import Projects from './dev/sections/Projects.vue';
import Contact from './dev/sections/Contact.vue';
import End from './dev/sections/End.vue';

import './dev/scss/main.scss';

AOS.init();

export default {
  name: 'App',
  components: {
    // Navigation,
    OverlayMenu,
    Home,
    Underground,
    SkillCertificate,
    AboutMe,
    Projects,
    Contact,
    End,
  },
};
</script>
