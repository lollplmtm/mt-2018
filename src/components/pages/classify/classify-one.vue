<template>
    <div class="app-classify-one">
        <header class="header" v-if="">
            <a @click="$router.go(-1)" class="fa fa-chevron-left"></a>
            <input type="text" placeholder="qwe"><i class="fa fa-search grey-9"></i>
            <a @click="$router.go(-1)" class="fa fa-ellipsis-h"></a>
        </header>
        <div class="sort">
            <a class="">综合</a>
            <a class="">价格</a>
            <a class="">新品优先</a>
            <a class=""> 筛选</a>
        </div>
        <ul>
            <li class="data" v-for="(good,i) in goods" :key="i">
                <a> 
                    <img v-if="good.hasAppPrice" class="one" src="" alt="">
                    <img class="two" :src="good.imagePath" alt="">
                    <h1>{{good.name}}</h1>
                    <h2>{{good.profile}}</h2>
                    <span>￥{{good.price}}</span>
                    <div class="count">
                        <div class="pj">{{good.commentCount}}</div>人评价
                        <div class="zx">{{good.consultCount}}</div>人咨询
                    </div>
                </a>
            </li>
        </ul>
        
        <app-footer></app-footer>
        
    </div>
</template>
<script >
import { mapState } from "vuex";
export default {
    name: "app-classify-one",
    data () {
        return {
            goods: [],
            start: 0,
            limit: 10,
            isloading: false,
            hasMore: true
        }
    },
    computed: {
    ...mapState(['commons']),
    category () {//当前的一级分类的信息
        //得到路由中的id 
        let id = this.$route.params.category_id
    
        return category
    }
    },
    methods:{
        getdata(){
            let coll = this.$route.params.coll;
            this.$http.get('/dt/web/api/products/v1',{params:{keyword:'',productId:'',page:1,coll:coll,from:'normal'}}).then(res=>{
            this.goods=res.data.data.product.list;
            })
          
        }
    },
    created() {
        this.getdata();
    },
};
</script>
<style lang="scss" scoped>
    ul{
        display:flex;
        justify-content: space-between;
        flex-wrap: wrap;
        background:#f5f5f5;
    }
    .data{
        width:49%;
        display:flex;
        flex-direction: column;
        flex-wrap:wrap;
        padding:0.1rem;
        position: relative;
        background:#fff;
        .one{
            width: 0.3rem;
            height: 0.65rem;
            position: absolute;
            top: 0rem;
            right: 0rem;
        }
        .two{
            width: 100%;
            height:1.48rem;
        }
        h1{
            height: 0.2rem;
            line-height: 0.2rem;
            font-size:0.16rem;
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top:0.02rem;
        }
        h2{
            height: 0.28rem;
            line-height: 0.28rem;;
            overflow: hidden;
            margin-bottom: 0.05rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            font-size: 0.12rem;
            color: #9c9c9c;

            
        }
        span{
            color: #c80f1e;
            font-size: 0.16rem;
            font-weight:bold;
        }
        .count{
            display:flex;
            font-size: 0.12rem;
            color: #9c9c9c;
            min-height: 0.16rem;
            line-height: 0.16rem;
            overflow: hidden;
            margin-top: 0.05rem;
            .pj{
                margin-right: 0.03rem;
            }
            .zx{
                margin-left:0.06rem;
                margin-right:0.03rem;
            }
 
            
        }
    }
    .header{
        height:0.5rem;
        border-bottom: 1px solid #ccc;
        width:100%;
        display:flex;
        position: fixed;
        top:0;
        background: #fff;
        .fa-ellipsis-h,.fa-chevron-left{
            flex:2;
            line-height:0.5rem;
            text-align:center;
            font-size:0.2rem;
        }
        input{
            flex:10;
            line-height:0.3rem;
            height: 0.3rem;
            font-size:0.12rem;
            border-radius: 0.05rem;
            background: #e3e3e3;
            padding:0  0.2rem;
            margin-top:0.1rem;
        }
        .fa-search{
            font-size:0.14rem;
            position:absolute;
            top:0.18rem;
            left:0.51rem;
            color:rgb(46, 43, 43);
        }
    }
    .sort{
        width:100%;
        display:flex;
        margin-top:0.5rem;
        a{
            flex:1;
            display:block;
            height:0.4rem;
            background:#f5f5f5;
            line-height:0.4rem;
            text-align:center;
        }
    }         
</style>
