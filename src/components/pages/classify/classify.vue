<template>
    <div class="app-classify page">
        <header class="header" v-if="">
            <a @click="$router.go(-1)" class="fa fa-chevron-left"></a>
            <input type="text" placeholder="qwe"><i class="fa fa-search grey-9"></i>
            <a @click="$router.go(-1)" class="fa fa-ellipsis-h"></a>
        </header>
        <div class="left_classify" >
            <a @click="chage(good.id,i)" class="data_phone" v-for="(good,i) in goods" :key="good.id">{{good.title}}</a>           
        </div>
        <div class="right_classify">
            <a class="cate-ad"><img :src="datas[0].picture" class="lazy-img" loaded="true"></a>
            <div v-for="(data,o) in datas[0].children" :key='o'>
            <h1 >{{data.title}}</h1>
            <ul>
            <router-link :to="{name:'classify-one',params:{coll: datad.coll}}" tag="li" v-for="(datad,j) in data.children" :key='j'>
               <a  class="">
               <img :src="datad.picture" alt="" class="data_data">
               <h2>{{datad.title}}</h2>
               </a>
            </router-link>
            </ul>
            </div>
        </div>
        <app-footer></app-footer>
        
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'app-classify',
        data () {
        return {
            goods: [],
            datas:[],
            start: 0,
            limit: 0,
            isloading: false,
            hasMore: true,
            id:408
        }
    },
    computed: {
        ...mapState(['number']),
        category () {//当前的一级分类的信息       
            if ( !this.number.category_list ) return null;
            this.goods = this.number.category_list;
            this.datas = this.number.category_list;
            return  this.goods      
        }
    },
    methods: {
        getGoods(){
        if ( ! this.$store.state.number.category_list ) return null;
        this.goods = this.number.category_list;
        this.datas = this.number.category_list;
        },
        chage(index,j){
                var data_phone =  document.querySelectorAll('.data_phone');
                for(var i=0;i<data_phone.length;i++){
                    if(j==i){
                        document.querySelectorAll('.data_phone')[i].style.color="#c80f1e";
                        document.querySelectorAll('.data_phone')[i].style.background="#f5f5f5";
                    }else{
                        document.querySelectorAll('.data_phone')[i].style.color="#000";
                        document.querySelectorAll('.data_phone')[i].style.background="#fff";
                  }
                }
            
              this.goods.forEach(item=>{
                  if(item.id==index){
                      this.datas=[];
                      this.datas.push(item);
                      console.log(this.datas);
                  }
              })  
        }
    },
    mounted() {
        
    },
    watch: {
        category: {//监听vuex中分类数据
            immediate: true,// 初始化的时候也执行一次
            handler  (val) {
                if ( val ) {
                    this.getGoods();
                }
            }
        }
    },
    mounted(){
      
       
    }
}
   
</script>

<style lang="scss">
    .right_classify{
        float:right;
        width:75%;
        background:#f5f5f5;
        padding:0.1rem 0.1rem;
        margin-top:0.5rem;
        height:100%;
        overflow: auto;
        margin-bottom:0.6rem;
        .cate-ad{
            img{
                width:100%;
            }
        }
        h1{
            font-weight: 700;
            height:0.3rem;
            line-height:0.3rem;
            font-size:0.12rem;
        }
        ul{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            background-color: #fff;
            li {
                display:block;
                width:33.3%;
                img{
                    width:100%;
                    height:0.9rem;
                }
                h2{
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    line-height: 0.3rem;
                    word-break: break-all;
                    -webkit-line-clamp: 1;
                    height: 0.3rem;
                    font-size:0.12rem;
                    text-align:center;
                }
            }
        }
    }
    .left_classify{
        width:25%;
        float:left;
        height:100%;
        margin-top:0.5rem;
        display:flex;
        flex-direction: column;
        flex-wrap:wrap;
        a{
        height: 0.5rem;
        padding: 0 0.08rem;
        line-height:0.5rem;
        font-size:0.12rem;
        text-align:center;
        background-color: #fff;
        border-bottom:  1px solid #dfdfdf;
        border-right:  1px solid #dfdfdf;

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
</style>
