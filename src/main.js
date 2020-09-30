import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//Font Awsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


library.add(faGithub, faLinkedin, faEnvelope)


Vue.component('font-awesome-icon', FontAwesomeIcon)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
