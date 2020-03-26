<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Home msg="Welcome to Your Home App"/>
    <Navigation/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Home from './dev/sections/Home.vue';
import Navigation from './dev/Navigation.vue';

import './dev/scss/main.scss';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    Navigation,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
