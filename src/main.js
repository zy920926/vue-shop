import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/global.css"


// 引入字体
import "./assets/fonts/iconfont.css"

//按需引入element-ui组件
import {MessageBox,Dialog,Pagination,Tooltip,Switch,Table,TableColumn,Row,Col,Card,Form,FormItem,Button,Input,Message,Container,Header,Aside,Main,Menu,Submenu,MenuItem,Breadcrumb,BreadcrumbItem} from "element-ui"
Vue.prototype.$confirm = MessageBox.confirm
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.prototype.$message = Message

//导入axios,配置根路径，并把axios放到Vue的原型上去，这样全局就可以调用$http
import axios from "axios"

axios.defaults.baseURL="http://127.0.0.1:8888/api/private/v1/"
axios.interceptors.request.use(config=>{
  config.headers.Authorization = window.sessionStorage.getItem("token")
  return config
})
Vue.prototype.$http = axios


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
