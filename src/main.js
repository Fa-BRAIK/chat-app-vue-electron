import Vue from 'vue'
import App from './App'
import VueSocketIO from 'vue-socket.io'

// import routes
import Routes from './routes'

Vue.use(new VueSocketIO({
  connection: 'http://localhost:3010'
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Routes,
}).$mount('#app')
