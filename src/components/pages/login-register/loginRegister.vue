<template>
    <div class="login-register">
        <header class="header">
            <a @click="$router.go(-1)" class="fa fa-chevron-left"></a>
            <h1>九机登录</h1>
            <a @click="$router.go(-1)" class="fa fa-ellipsis-h"></a>
        </header>
        <div class="">
            <div class="buttons-tab">
                <router-link replace active-class="login_active" :to="{ name: 'login-a' }" class="tab-link1 button">帐号密码登陆</router-link>
                <router-link replace active-class="login_active" :to="{ name: 'login-b' }" class="tab-link2 button">短信验证登录</router-link>
            </div>
        </div>
        <router-view ></router-view>
        <div class="new">
            <a class="zhuce">新用户注册</a>
            <a class="forget">忘记密码</a>  
        </div>
        <h1 class="login_three">第三方登录</h1>
        <a class="login_qq"><img src="//img2.ch999img.com/m/static/assets/qq.7df9dcd2828ad5eaeee0e76ce8f7d917.png"/></a>
    </div>
</template>
<script>

export default {
    name: 'app-login-register',
    data(){
        return { 
         } 
    },
    computed:{
        login_red(){
            return this.$store.state.number.login_red;
        }
    },
    mounted(){

    },
    watch:{
        
    }
}
</script>
<style lang="scss" scoped>
    .header{
        height:0.5rem;
        width:100%;
        display:flex;
        .fa{
        flex:2;
        line-height:0.5rem;
        text-align:center;
         font-size:0.2rem;
        }
        h1{
        flex:10;
        text-align:center;
        line-height:0.5rem;
        font-size:0.2rem;
        }
    }
    .buttons-tab{
        margin:0.3rem 0;
        height:0.16rem;
        display:flex;
        padding-left:16%;
        padding-right:16%;
        .tab-link1{
        flex:1;
        border-right:1px solid #000;
            }
        .button{
        text-align:center;
        font-size:0.16rem;
        line-height:0.16rem;
        }
        .tab-link2{
        flex:1;
        border-left:1px solid #000;
        }       
    }
    .login_active{
        color:#c80f1e;
    }
    .new{
        display:flex;
        width:90%;
        margin:0 5%;
        height:0.5rem;
        justify-content:space-between;
        a{
        height:0.5rem;
        line-height:0.5rem;
        font-size:0.16rem;
        }
    }
    .login_three{ 
        width:100%;
        margin-top:0.5rem;
        text-align:center;
        color:#ccc;
        font-size:0.15rem;
    }
    .login_qq img{
        display:block;
        width:0.34rem;
        height:0.34rem;
        margin:0.1rem auto;
    }


</style>
