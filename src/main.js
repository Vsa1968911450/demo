// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'
// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'
import 'vant/lib/index.css'
import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './components/global.less'
import { Dialog } from '@/components'
import { Button, Form, Cell, CellGroup, Field, Uploader, Icon, NavBar, DropdownMenu, DropdownItem, ActionSheet, RadioGroup, Radio, Image, Area, Popup } from 'vant'
import '@/assets/iconfont/iconfont.css'
Vue.use(Popup)
Vue.use(Area)
Vue.use(Image)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(ActionSheet)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Uploader)
Vue.use(Field)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Form)
Vue.use(Button)
Vue.config.productionTip = false

// mount axios Vue.$http and this.$http
Vue.use(VueAxios)
Vue.use(Dialog)

new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
