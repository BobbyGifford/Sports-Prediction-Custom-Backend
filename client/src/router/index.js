import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/List'
import Create from '@/components/CreatePrediction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list/:category',
      props: true,
      name: 'List',
      component: List
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ],
  mode: 'history'
})
