import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/reset.css"
import "@/assets/css/index.css"

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Router from 'vue-router'
Vue.use(Router)

import layoutA from '@/components/layout/layoutA.vue'
import layoutB from '@/components/layout/layoutB.vue'



import Common from '@/components/layout/common-card.vue'
Vue.component('commonCard', Common)

import billboard from '@/components/layout/billboard-card.vue'
Vue.component('billboardCard', billboard)

import classify from '@/components/layout/classify-card.vue'
Vue.component('classifyCard', classify)
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: layoutA,
    children: [{
      path: '/home', component: () => import('./view/home/index.vue')
    }]
  },
  {
    path: '/about',
    component: layoutB,
    children: [{
      path: '/about/read', component: () => import('./view/read/read.vue')
    }, {
      path: '/about/music', component: () => import('./view/music/music.vue')
    }, {
      path: '/about/film', component: () => import('./view/film/film.vue')
    }]
  }
]

let router = new Router({
  routes // (缩写) 相当于 routes: routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.config.productionTip = false



