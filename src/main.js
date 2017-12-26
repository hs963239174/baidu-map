// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import '@/assets/bootstrap/css/bootstrap.css'
import '@/assets/fontAwesome/css/font-awesome.css'
import '@/assets/bootstrap-datetimepicker/bootstrap-datetimepicker.css'
import '@/assets/scroll/sidebar.css'
import '@/assets/css/design.css'
import '@/assets/css/index.css'

import '@/assets/bootstrap/js/bootstrap.js'
import '@/assets/bootstrap-datetimepicker/bootstrap-datetimepicker.js'
import '@/assets/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-CN.js'
import '@/assets/scroll/sidebar.js'
import '@/assets/js/index.js'

Vue.config.productionTip = false

var Hub = new Vue({
  el: '#mainPage',
  router,
  template: '<App/>',
  components: { App },
  mounted:function () {
  document.oncontextmenu = function() {
    return false;
  }
}
})



