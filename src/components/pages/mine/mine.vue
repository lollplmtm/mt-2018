<template>
    <div class="app-mine page">
        <div class="top">
            <i class="goback fa fa-chevron-left" @click="$router.go(-1)"></i>
            <div class="username"></div>
            <a class="set">设置<i class="fa fa-gear"></i></a>
        </div>
        <div class="users">
        <div class="shang">
        <div class="icon"></div>
            <div class="user_grade">
                <div class="user_phone">18774874714</div>
                <div class="vip">
                    <div class="qt"><img src="https://img2.ch999img.com/newstatic//912/445858579f8eec.png"/></div>
                    <div class="wx"><img src="https://img2.ch999img.com/newstatic//912/4448465aaa206c.png.webp"/>未绑定</div>   
                </div>
            </div>
        </div>
        <ul class="xia">
            <li v-for="(property,i) in propertys" :key="i">
                <a :href="property.link">
                    <div class="xia_top">{{property.number}}</div>
                    <div class="xia_bom">{{property.title}}</div>
                </a>
            </li>
        </ul>
        </div>
        <div class='navs'>
        <div class="data" v-for="(data,i) in datas" :key="i">
        <div class="one">
            <h1>{{data.title }}</h1>
            <a :href="data.moreLink">{{data.moreText}} <img v-if="data.subjectMorePic" :src="data.subjectMorePic? data.subjectMorePic : ''"/></a>
        </div>
        <ul class="two" >
            <li v-for="(data_data,j) in data.item" :key="j">
                <a :href="data_data.link">
                <img class="tp" :src="data_data.imagePath"></img>
                <div class="bm">{{data_data.title}}</div>
                </a>
            </li>
        </ul>
        </div>
        </div>
        <app-footer></app-footer>
    </div>
</template> 
<script>
export default {
    name: 'app-mine',
    data(){
        return {
            datas:[],
            users:[],
            propertys:[]
        }
    },
    methods:{
         getData () {
            this.$http.get('/dt/web/api/member/index/v1?v=0.5751667915589536'
            ).then(res => {
                this.datas = res.data.data.menu;
                this.propertys = res.data.data.property;
                this.users = res.data.data.user;
            })
        }
    },
    created () {
      this.getData()
  }
}
</script>

<style lang="scss">
    .navs{margin-bottom:0.8rem;}
    .data{
        border-radius: 0.1rem;
        box-shadow: 0 0.02rem 0.05rem #000;
        width:90%;
        margin: 0 5%;
        margin-top:0.6rem;
        .one{
            height:0.5rem;
            display:flex;
            text-align:center;
            border-bottom:1px solid #ccc;
            justify-content:space-between;
            a{  
                line-height:0.5rem;
                display:flex;
                font-size:0.16rem;
                width:30%;
                color:#ccc;
                img{
                    height:0.2rem;
                    width:0.16rem;
                    margin:0.15rem 0;
                    line-height:0.5rem;
                    margin-left:0.1rem;
                }
            }

            h1{
                line-height:0.5rem;
                font-size:0.16rem;
                width:24%;
            }
        }
        .two{
            display:flex;
            padding:0.01rem 5%;
            flex-wrap:wrap;
            li{
                width:24%;
                display:flex;
                height:0.8rem;
                text-align:center;
                flex-direction:column;
                justify-content:space-between;

                .tp{
                    width:0.24rem;
                    margin:0 auto;
                    height:0.24rem;
                    margin-top:0.2rem;
                }
                .bm{
                   
                    line-height:0.4rem;
                    font-size:0.1rem;
                }

            }
        }
        
    }
    .top{
        z-index:1000;
           height:0.5rem;
        font-size:0.16rem;
        line-height:0.5rem;
          display:flex;
        text-align:center;
           background:#D90000;
        color:#fff;
        position:fixed;
          top:0;
        width:100%;
        .goback{
            flex:1;
            line-height:0.5rem;
        }
        .set{
            font-size:0.16rem;
            flex:2;
            color:#fff;
        }
        .username{
            flex:7;
        }
    }
    .users{
        width:90%;
        margin: 0.1rem 5%;
        margin-top:0.6rem;
        height:1.8rem;
        border-radius: 0.1rem;
        box-shadow: 0 0.02rem 0.05rem #000;
        background: #fff;        
        padding: 0 0.1rem;
        position: relative; 
        .shang{
            display:flex;
            height:1rem;
            padding:0.2rem 0.1rem;
            .icon{
                width: 0.7rem;
                height: 0.7rem;
                border-radius: 100%;
                border: 3px solid #fff;
                box-shadow: 0 0.02rem 0.05rem #ccc;
                margin-right: 0.1rem;
                background:url("https://img2.ch999img.com//images/usericon.png");
                background-position: 50%;
                background-repeat: no-repeat;
                background-size: contain;
                
 
            }
            .user_grade{
                height: 0.7rem;
                padding-left:0.1rem;
                .user_phone{
                    font-size:0.16rem;
                    line-height:0.4rem;
                    height:0.4rem;
                    color:#000;
                }
                .vip{
                    font-size:0.14rem;
                    line-height:0.2rem;
                    height:0.3rem;
                    display:flex;
                    .qt,.wx{
                        margin-right:0.2rem;
                        display:flex;
                    }
                    .qt img{
                        width: 0.78rem;
                        height: 0.20rem;
                        margin-right: 0.03rem;
                    }
                    .wx img{
                        width: 0.2rem;
                        height: 0.2rem;
                        margin-right: 0.03rem;
 
                    }

                }
            }
        }
        .xia{
            display:flex;
            padding:0.01rem 5%;
            li{
                width:24%;
                display:flex;
                height:0.8rem;
                text-align:center;
                flex-direction:column;
                justify-content:space-between;

                .xia_top{
                    width:0.25rem;
                    margin:0 auto;
                    height:0.2rem;
                    margin-top:0.24rem;
                    font-size:0.1rem;
                }
                .xia_bom{
                   
                    line-height:0.2rem;
                    font-size:0.1rem;
                    margin-bottom:0.2rem;
                }

            } 
        }

    }
</style>
