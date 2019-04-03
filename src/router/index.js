import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import vuex_test from '@/components/vuex_test'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'home',
      component: home
    },
    // {
    //   path: '/vuex',
    //   name: 'vuex_test',
    //   component: vuex_test
    // }
  ],
  //mode:'history',
})
