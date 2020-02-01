import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/global.css"


// 引入字体
import "./assets/fonts/iconfont.css"

//按需引入element-ui组件
import {Form,FormItem,Button,Input,Message} from "element-ui"
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message

//导入axios,配置根路径，并把axios放到Vue的原型上去，这样全局就可以调用$http
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:8888/api/private/v1/"
Vue.prototype.$http = axios


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
