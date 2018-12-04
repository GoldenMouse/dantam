import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import ContactUs from './views/ContactUs.vue'
import Services from './views/Services.vue'
import Portfolio from './views/Portfolio.vue'
import Tester from './components/Tester.vue'
import NotFound from './components/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
          selector: to.hash, 
          behavior: 'auto', 
          offset: { x: 0, y: 140 }
        }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/services',
      name: 'services',
      component: Services 
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio 
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs 
    },
    {
      path: '/tester',
      name: 'tester',
      component: Tester 
    },
    { path: '/404', component: NotFound },  
    { path: '*', redirect: '/404' },  
  ]
})
