import Vue from 'vue'
import App from './App'
// import login
import Home from './components/Home'

// import routes
import Routes from './routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Routes,
}).$mount('#app')
