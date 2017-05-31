// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(Element)
const router = new VueRouter({
    routes,
    scrollBehavior: () => ({ y: 0 })
})

// 全局路由钩子
router.beforeEach((to, from, next) => {
    next()
})

// 来关闭生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    axios,
    render: h => h(App)
}).$mount('#app')
