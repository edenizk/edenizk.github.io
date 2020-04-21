<template>
  <div id="app">
    <Navigation/>
    <Home msg="Welcome to Your Home App"/>
    <Underground/>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './dev/Navigation.vue';
import Home from './dev/sections/Home.vue';
import Underground from './dev/sections/Underground.vue';
import './dev/scss/main.scss';

AOS.init();

export default {
  name: 'App',
  components: {
    Navigation,
    Home,
    Underground,
  },
};
</script>
