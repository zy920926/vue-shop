<template>
  <el-container class="home-container">
      <!-- 头部区域 -->
      <el-header>
          <div>
            <img src="../assets/mark.png" alt="">
            
          </div>
          <el-button type="info" @click="logout">退出</el-button>
      </el-header>
    <!-- 页面主体 -->
      <el-container>
          <!-- 左侧边栏 -->
          <el-aside :width="isCollapse?'64px':'200px'">
              <div class="toggle-button" @click="toggleCollapse">|||</div>
             <el-menu
              unique-opened
              background-color="#333744"
              text-color="#fff"
              active-text-color="#409EFF"
              :collapse="isCollapse"
              :collapse-transition="false"
              router
              :default-active="$route.path"
              >
               <!-- 一级菜单 -->
                  <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
                      <template slot="title">
                        <i :class="iconsObj[item.id]"></i>
                        <span>{{item.authName}}</span>
                      </template>
                      <!-- 二级菜单 -->
                       <el-menu-item :index="'/'+subItem.path" v-for="subItem in item.children " :key="subItem.id">
                         <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>{{subItem.authName}}</span>
                        </template>
                       </el-menu-item>
                  </el-submenu>
              </el-menu>

          </el-aside>
          <!-- 右主题内容 -->
          <el-main>
           <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      menuList:[],
      iconsObj: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      },
      //不折叠
      isCollapse:false
    }
  },
  created(){
    this.getMenuList()
  },
  methods:{
    //推出登录事件
    logout(){
      window.sessionStorage.clear()
      this.$router.push("/login")
    },

    //获取所有侧边栏菜单
      // getMenuList(){
      //   this.$http.get("menus").then(res=>{
      //     console.log(res)
      //   })
      // }
    async getMenuList(){
      const {data:res} =  await this.$http.get("menus")
      if(res.meta.status !==200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
    },
    //折叠展开侧边栏事件
    toggleCollapse(){
      this.isCollapse=!this.isCollapse
    }
  
  }
}
</script>

<style lang="less" scoped>
  .home-container{
    height:100%;
  }
  .el-header{
    background: #373D41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      height:60px;
    }
  }
  .el-aside{
    background:#333744;
    .el-menu{
      border-right: none;
    }
  }
  .el-main{
    background: #EAEDF1;
  }
  .iconfont{
    margin-right:10px;
  }
  .toggle-button{
    background:#4A5064;
    font-size:10px;
    line-height:24px;
    color:#fff;
    text-align:center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }

</style>