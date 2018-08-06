<template>
    <div class="app-login-a">
       <div class="inp one">
            <i class="fa fa-user-o"></i>
            <input placeholder="手机号码" v-model="phone"></input>  
        </div>
        <div class="inp two">
            <i class="fa fa-lock"></i>
            <input placeholder="动态密码" v-model="code"></input>
            <a class="code" @click="sendCode">获取验证码</a>  
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
            phone:'',
            code:"",
            transform:true, 
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
            if (!this.code){
                alert('验证码不为空!');
                return false;
            } 
            this.$store.dispatch('action_login', {
                code: this.code, phone: this.phone,
                success: (user_state) => {
                    console.log('登陆成功');
                    this.$router.go(-1);
                    if(!this.transform){
                    this.$cookies.set('phone',this.phone,"90d","/");
                    return false;
                    }
                    this.$cookies.set('phone',this.phone,"1d","/");
                },
                fail: () => {
                   console.log('短信验证码错误')
                }
            })
        },
        sendCode() { //发送验证码了
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.phone)) {
                alert('请输入正确的手机号！');
                return false;  
            } 
            this.$http.post('/mz/v4/api/code?__t=' + Date.now(), {
                mobile: this.phone,
                type: "2"
            }).then(res => {
                if (res.data.status === 0) {
                    console.log('验证码发送成功')
                }
            })
        }
    },
    watch:{
         code: {
                //immediate: true,//默认执行一次
                handler (new_val, old_val) {
                    if ( new_val.length > 0 && this.phone!="" ) {
                        this.$store.commit('CHANGE_RED');
                        document.querySelector('.login').style.background="red";
                    }else {
                        this.$store.commit('CHANGE_WHITE');
                        document.querySelector('.login').style.background="#dfdfdf";
                    }
                }
        },
        phone: {
                //immediate: true,//默认执行一次
                handler (new_val, old_val) {
                    if ( new_val.length>0 && this.code!="" ) {
                        this.$store.commit('CHANGE_RED');
                        document.querySelector('.login').style.background="red";
                    }else {
                        this.$store.commit('CHANGE_WHITE');
                        document.querySelector('.login').style.background="#dfdfdf";
                    }
                }
        }

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
        position:relative;
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
    .code{
        width:20%;
        height:0.25rem;
        border:1px solid #78b;
        color:#78b;
        text-align:center;
        line-height:0.25rem;
        position:absolute;
        right:0;
        top:0;
        border-radius:0.05rem;

    }
    }
</style>
