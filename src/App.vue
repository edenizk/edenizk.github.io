<template>
  <div id="app">
    <Navigation/>
    <Home msg="Welcome to Your Home App"/>
    <Underground/>
    <SkillCertificate/>
    <AboutMe/>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './dev/Navigation.vue';
import Home from './dev/sections/Home.vue';
import Underground from './dev/sections/Underground.vue';
import SkillCertificate from './dev/sections/SkillCertificate.vue';
import AboutMe from './dev/sections/AboutMe.vue';

import './dev/scss/main.scss';

AOS.init();

export default {
  name: 'App',
  components: {
    Navigation,
    Home,
    Underground,
    SkillCertificate,
    AboutMe,
  },
};
</script>
