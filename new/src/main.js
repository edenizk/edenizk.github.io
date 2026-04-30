import { createApp } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App.vue'
import './dev/scss/main.scss'

// TODO: replace AOS with @vueuse/motion for Vue-native scroll animations
AOS.init()

createApp(App).mount('#app')
