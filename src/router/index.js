import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login"
import Home from "../components/Home"
import Welcome from "../components/Welcome"
import Users from "../components/user/Users"
import Rights from "../components/power/Rights"
import Roles from "../components/power/Roles"
import Cate from "../components/goods/Cate"
Vue.use(Router)

const routes = [
  {path:"/login",component:Login},
  {path:"/",redirect: '/login'}, // 路由重定向
  {
    path:"/home",
    component:Home, 
    redirect: "/welcome",
    children:[
      // {path:"/welcome",component:()=>import("@/components/Welcome")}
      {path:"/welcome",component:Welcome},
      {path:"/users",component:Users},
      {path:"/rights",component:Rights},
      {path:"/roles",component:Roles},
      {path:"/categories",component:Cate}

    ]
  }
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
