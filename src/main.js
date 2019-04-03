// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import "element-ui/lib/index.js"
import router from './router'
import axios from 'axios'
// import qs from 'qs'
import Vuex from 'vuex'


Vue.prototype.$http = axios;

Vue.config.productionTip = false;
//状态管理
Vue.use(Vuex);
// Vue.use(qs)
Vue.use(ElementUI);

var store = new Vuex.Store({
	state:{
		show:false,
		price:0
	},
	mutations:{
		isShow(state){
			state.show=true
		},
		addPrice(state,x){
			state.price += x
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
//   qs,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
