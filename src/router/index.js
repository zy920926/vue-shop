import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login.vue"
import Home from "../components/Home.vue"

Vue.use(Router)

const routes = [
  {path:"/login",component:Login},
  {path:"/",redirect: '/login'}, // 路由重定向
  {path:"/home",component:Home}
]

const router = new Router({
  routes
})

//调用（挂载）全局路由钩子
  router.beforeEach((to,from,next)=>{
    if(to.path === "/login") return next()
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
  })
export default router
