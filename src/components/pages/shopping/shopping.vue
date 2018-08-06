<template>        
    <div class="app-shopping page">
        <div class="top">
            <i class="goback fa fa-chevron-left" @click="$router.go(-1)"></i>
            <div class="username">购物车</div>
            <a class="set" >编辑</a>
        </div>
        <div  class="nothing">
            <i  class="fa fa-shopping-cart"></i> 
            <p class="grey-9">购物车里什么都没有，快去买点什么吧~</p> 
            <a  href="/" class="link">去逛逛</a>
        </div>
        <div class="hotSale">
            <img  :src="datas.titleImage" class="full-width">
            <ul>
                <li v-for="(data,i) in datas.list"  :key='i'>
                    <a>
                        <img :src="data.sku[0].imagePath"></img>
                        <p>{{data.name}}</p>
                    </a>
                    <div class="hotSale_price">
                        <span>￥{{data.sku[0].price}}</span>
                        <a><i class="fa fa-shopping-cart font-20"></i></a>
                    </div>
                </li>
            </ul>
        </div>
        <app-footer></app-footer>
    </div>
</template>
<script>
export default {
    name: 'app-shopping',
    data(){
        return {
            datas:{},
        }
    },
     methods:{
         getData () {
            this.$http.get('/dt/web/api/tmpBasket/list/v1'
            ).then(res => {
                this.datas = res.data.data.recommend; 
            })
        }
    },
    created () {
      this.getData()
  }
}
</script>

<style lang="scss">
    .hotSale{
        background-color: rgba(250, 250, 250, 0.980392);
        ul{
            display:flex;
            flex-wrap:wrap;
            justify-content: space-between;
            padding-bottom:0.8rem;
            li{
                width: 1.83rem;
                background: #fff;
                margin-bottom: 0.1rem;
                padding: 0 0.1rem 0.1rem;
                img{
                    width:1.63rem;
                    height:1.63rem;
                }
                p{
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    line-height: 0.16rem;
                    word-break: break-all;
                    -webkit-line-clamp: 1;
                    height: 0.16rem;
                    margin-top: 5px;
                    display: block;
                    font-size:0.12rem;
                    white-space: nowrap;
                }
                .hotSale_price{
                    display:flex;
                    justify-content: space-between;
                    height:0.2rem;
                    line-height:0.2rem;
                    margin:0.06rem 0;
                    font-size:0.14rem;
                    a i {
                        font-size:0.2rem;
                        margin-right:0.1rem;
                        font-weight:bold;
                    }
                    span{
                        color:red;
                    }

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
        color:#333;
        position:fixed;
        top:0;
        width:100%;
        background-color: rgba(250, 250, 250, 0.980392);
        border-bottom:1px solid #ccc;
        .goback{
            flex:2;
            line-height:0.5rem;
        }
        .set{
            font-size:0.16rem;
            flex:2;
            color:#333;
            text-align:center;
        }
        .username{
            flex:8;
        }
    }
    .nothing{
        padding: 20px 0;
        background: #fff;
        margin-top:0.5rem;
        display:flex;
        align-items:center;
        flex-direction: column;
        .fa-shopping-cart{
            font-size: 0.5rem;
            color: #ccc;
        }
        .grey-9{
            margin:0.2rem 0;
            color:#9c9c9c;
        }
        .link{
            display: block;
            width: 0.7rem;
            height: 0.36rem;
            text-align: center;
            line-height: 0.36rem;
            border: 1px solid #333;
            border-radius: 0.03rem;
 
        }

    }
    .full-width{
            width:100%;
    }
</style>
