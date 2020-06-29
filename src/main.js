import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueTypedJs from 'vue-typed-js'
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github'
import axios from 'axios'
import VueAxios from 'vue-axios'
import GAuth from 'vue-google-oauth2'
import { firestorePlugin } from 'vuefire'

VMdPreview.use(githubTheme)
Vue.use(VMdPreview)
Vue.config.productionTip = false
Vue.use(VueTypedJs)
Vue.use(VueAxios, axios)
Vue.use(firestorePlugin)
Vue.use(GAuth, {
  clientId:
    '375226969055-7kqm8054f7neuru2sip7n0sdij0p1ies.apps.googleusercontent.com',
  scope: 'email',
  prompt: 'consent',
  fetch_basic_profile: true
})
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
