<template>
    <div class="app-header-top" v-if = "isShow">
            <div class=top-btn @click="isShow=!isShow">×</div>
            <img :src="imgurl"/>
            <div class="top-c">
                <p class="p-t"> {{ title1 }} </p>
                <p class="p-b"> {{ title2 }} </p>
            </div>
        <a> {{ title3 }} </a>
    </div>
</template>


<script>
    export default{
        name:'AppHeaderTop',
        data(){
            return {
                isShow:true,
                imgurl:'/static/1.png',
                title1:'打开九机APP购物',
                title2:'新人领469元红包',
                title3:'立即打开'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .app-header-top{
        width:100%;
        height:0.5rem;
        background:#000;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .top-btn{
            width:0.18rem;
            height:0.18rem;
            border:1px solid #9c9c9c;
            border-radius:100%;
            margin: 0 0.1rem;
            line-height: 0.16rem;
            font-size:0.16rem;
            text-align:center;
        }
        img{
            width:0.4rem;
            height:0.4rem;
            border-radius:0.1rem;
        }
        .top-c{
            margin-left:0.1rem;
            .p-t{
                color:#ccc;
            }
            .p-b{
                font-size:0.12rem;
                margin-top:0.05rem;
                color: #9c9c9c;
            }
        }
        a{
            display: block;
            width: 0.9rem;
            height:0.5rem;
            text-align: center;
            line-height: 50px;
            color: #fff;
            background:#c80f1e;
        }
    }
</style>   