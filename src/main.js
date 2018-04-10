// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import StoryblokVue from 'storyblok-vue'
import Root from './components/Root.vue'
import Teaser from './components/Teaser.vue'
import Hero from './components/Hero.vue'
import ClassTimes from './components/ClassTimes.vue'
import ContentBlock from './components/ContentBlock.vue'
// import ContactForm from './components/ContactForm.vue'
import HomeItems from './components/HomeItems.vue'
import FosterForm from './components/FosterForm.vue'
import AdoptForm from './components/AdoptForm.vue'

Vue.component('root', Root)
Vue.component('teaser', Teaser)
Vue.component('hero', Hero)
Vue.component('class-times', ClassTimes)
Vue.component('content-block', ContentBlock)
// Vue.component('contact-form', ContactForm)
Vue.component('home-items', HomeItems)
Vue.component('foster-form', FosterForm)
Vue.component('adopt-form', AdoptForm)
Vue.use(StoryblokVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
