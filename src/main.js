// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 1. import 引入组件（或定义组件）
import ESS from './components/Ess.vue'
import ECO from './components/Eco.vue'

import HOME from './components/Home.vue'
import Tab from './components/Tab.vue'

// 2. 定义路由
const routes = [
  {path:'/', component:HOME},
  {path:'/home',component:HOME},
  {
    path:'/tab',
    component:Tab,
    children: [
      {path:'/', component:ESS},
      { path: '/ess', component:ESS},
      { path: '/eco', component:ECO},
    ]
  }
];

// 3. 创建router实例， 然后传routes配置
const router = new VueRouter({
  routes
});

// 4. 创建或挂载根实例
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});
