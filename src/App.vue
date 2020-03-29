<template>
  <div id="app">
    <Navigation/>
    <Home msg="Welcome to Your Home App"/>
  </div>
</template>

<script>
import Home from './dev/sections/Home.vue';
import Navigation from './dev/Navigation.vue';

import './dev/scss/main.scss';

export default {
  name: 'App',
  components: {
    Navigation,
    Home,
  },
};
</script>
