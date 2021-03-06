// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import store from '@/store/store'
import {sync} from 'vuex-router-sync'

import ListFormat from './components/ListFormat'
import AddAsDialog from './components/AddAsDialog'

Vue.use(Vuetify)

sync(store, router)

Vue.config.productionTip = false

Vue.component('app-pred-list', ListFormat)
Vue.component('app-add-dialog', AddAsDialog)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
