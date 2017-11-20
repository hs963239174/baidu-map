// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/bootstrap/css/bootstrap.css'
import './assets/fontAwesome/css/font-awesome.css'
import './assets/bootstrap-datetimepicker/bootstrap-datetimepicker.css'
import './assets/css/design.css'
import './assets/css/index.css'

import './assets/bootstrap/js/bootstrap.js'
import './assets/bootstrap-datetimepicker/bootstrap-datetimepicker.js'
import './assets/bootstrap-datetimepicker/bootstrap-datetimepicker.zh-CN.js'
import './assets/js/index.js'

Vue.config.productionTip = false

new Vue({
  el: '#typeSelector',
  router,
  template: '<App/>',
  components: { App }
})

window.onload = (function(){
  var map = new BMap.Map("mapContent");          // 创建地图实例
  var point = new BMap.Point(114.328428,22.994956);  // 创建点坐标
  map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
  map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

});


