// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from '@/store'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import theme from 'muse-ui/lib/theme'
import 'typeface-roboto'
import '@/api'
import '@/directive'
import 'muse-ui/dist/muse-ui.css'
import '@/assets/css/iconfont.css'
import '!style-loader!css-loader!less-loader!@/assets/css/com.less'//使用全局样式

Vue.use(MuseUI)
theme.use('dark')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render:h => h(App)
})
