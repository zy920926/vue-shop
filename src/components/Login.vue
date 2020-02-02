<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>

            <!-- 表单 区域-->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                 <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            loginForm:{ //这是登录表单的数据绑定对象
                username:"admin",
                password:"123456",
            },
            // 表单验证规则
            loginFormRules:{
                username:[
                    { required: true, message: '请输入用户名称', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password:[
                     { required: true, message: '请输入用户密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        // 重置按钮触发的重置表单事件
        resetLoginForm(e){
            this.$refs.loginFormRef.resetFields();
        },
        login(){
            this.$refs.loginFormRef.validate(async (valid)=>{ //loginFormRef.validateelement-ui  form的api
                if(!valid) return;
                const {data:res} = await this.$http.post("login",this.loginForm)
               
                if(res.meta.status !== 200) return this.$message({showClose: true,message: '登录失败',type: 'error',duration:1000})
                this.$message({showClose: true,message: '登录成功',type:'success',duration:1000})
                window.sessionStorage.setItem('token',res.data.token)
                this.$router.push("./home")
            })
        }
    }
}
</script>

<style lang="less" scoped>
    .login_container{
        background: #2b4b6b;
        height:100%;
        .login_box{
            width:450px;
            height:300px;
            background: #fff;
            border-radius: 3px;
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%,-50%);
            .avatar_box{
                height:130px;
                width:130px;
                border:1px solid #eee;
                border-radius: 50%;
                padding:10px;
                box-shadow: 0 0 10px #ddd;
                position:absolute;
                left:50%;
                transform: translate(-50%,-50%);
                background: #fff;
                img{
                    width:100%;
                    height:100%;
                    border-radius: 50%;
                    background: #eee;
                }
            }
        }
    }
    .login_form{
        position: absolute;
        bottom:10px;
        width:100%;
        padding:0 20px;
        box-sizing: border-box;
    }

    .btns{
        display:flex;
        justify-content: flex-end;
    }
</style>