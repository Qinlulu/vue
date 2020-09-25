import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from "./element/index"
Vue.use(ElementUI);
import Server from "./server/index"
Vue.use(Server);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
