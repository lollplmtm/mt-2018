<template>
    <div class="app-login-a">
        <div class="inp one">
            <i class="fa fa-user-o"></i>
            <input placeholder="用户名/手机号" v-model="phone"></input>  
        </div>
        <div class="inp two">
            <i class="fa fa-lock"></i>
            <input placeholder="请输入密码" v-model="password"></input>  
        </div>
        <div class="inp three" @click = "transforms(transform)">
            <i>三个月内免登陆</i>
            <div class="login_free">
                <div class="ball"></div>
            </div>
        </div>
        <a class="login" @click="submit">登录</a>
    </div>
</template>
<script>
export default {
    name: 'app-login-a',
    data(){
        return {
            phone:"",
            password:"",
            transform:true
        }
    },
    methods:{

    },
    create(){

    },
    methods:{
        transforms(transform){
            if(transform){
                document.querySelector('.ball').style.transform="translateX(0.18rem)";
                document.querySelector('.login_free').style.background="#1aad19";
                this.transform=false;
            }else{
                document.querySelector('.ball').style.transform="translateX(0rem)";
                document.querySelector('.login_free').style.background="#fff";
                this.transform=true;
            }
        },
        submit(){
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.phone)) {
                alert('请输入正确的手机号！');
                return false;  
            } 
            if (!this.password){
                alert('验证码不为空!');
                return false;
            } 
            var user_name = this.$store.state.number.user_name;
            var backto = user_name.some((item)=>{
                return item.phone==this.phone && item.password==this.password   
                }
            )
            if(backto){
                if(!this.transform){
                    this.$cookies.set('phone',this.phone,"90d","/");
                    return false;
                }
                this.$cookies.set('phone',this.phone,"1d","/");
                this.$router.go(-1);  
            }else{
                alert('帐号或者密码错误！');
            }
        },
    },
    watch:{
         password: {
                    //immediate: true,//默认执行一次
                    handler (new_val, old_val) {
                        if ( new_val.length > 0 && this.phone!="" ) {
                            document.querySelector('.login').style.background="red";
                        }else {
                            document.querySelector('.login').style.background="#dfdfdf";
                        }
                    }
                },
        phone: {
                    //immediate: true,//默认执行一次
                    handler (new_val, old_val) {
                        if ( new_val.length>0 && this.password!="" ) {
                            document.querySelector('.login').style.background="red";
                        }else {
                            this.$store.commit('CHANGE_WHITE');
                            document.querySelector('.login').style.background="#dfdfdf";
                        }
                    }
                }

    },
    computed:{

    }
}
</script>

<style lang="scss">
    .app-login-a{
        margin-top:0.4rem;
    .inp{
        width:90%;
        display:flex;
        height:0.3rem;
        border-bottom:1px solid #dfdfdf;
        margin:0.2rem 5%;
    .fa{
        display:block;
        height:0.3rem;
        line-height:0.3rem;
        font-size:0.2rem;
        padding-right:0.05rem;
        flex:1;
    }
    input{
        flex:8;
        border:none;
    }
    }
    }
    .login{
        display:block;
        width:90%;
        margin:0 5%;
        margin-top:0.5rem;
        margin-buttom:0.2rem;
        background:#dfdfdf;
        text-align:center;
        line-height:0.5rem;
        height:0.5rem;
        color:#fff;
        font-size:0.2rem;
    }
    .three{
        width:90%;
        display:flex;
        height:0.3rem;
        border-bottom:1px solid #dfdfdf;
        margin:0.2rem 5%;
        justify-content:space-between; 
        }
    .login_free{
        width:13%;
        border:1px solid #ccc;
        height:0.26rem;
        border-radius:0.13rem;
        position:relative;
        .ball{
            width:0.25rem;
            height:0.25rem;
            border-radius:50%;
            border:1px solid #ccc;
            position:absolute;
            top:0;
            left:0;
            background:#fff;
            transition:all 0.2s;
        }

    }
    
</style>
