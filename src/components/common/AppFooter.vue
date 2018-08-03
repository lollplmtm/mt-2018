<template>
    <footer class="app-footer">
        <nav class="bar bar-tab" >
          <router-link exact :to = "item.path" class="tab-item " href="#" v-for = "(item,i) in footers" :key='i'  active-class="active"
          >
            <i :class="item.name "  ></i>    
            <span class="tab-label"  >{{item.title}}</span>
          </router-link>
        </nav>
    </footer>

</template>


<script>
export default{
    name:'app-footer',
    data(){
        return{
            footers:[],
            navs:[
                {path:'/',name:'fa fa-home'},
                {path:'/classify',name:'fa fa-sort-amount-asc'},
                {path:'/message',name:'fa fa-commenting'},
                {path:'/login-register',name:'fa fa-cart-plus'},
                {path:'/mine',name:'fa fa-user-o '}
            ]
        }
    },
    methods:{

        foot () {
            this.$http.get('/dt/web/api/floors/v1?label=0&page=1&random=0').then(res => {
                this.footers = res.data.data.tabBar;
                for(var i=0;i<this.footers.length;i++){
                    this.footers[i].path = this.navs[i].path;
                    this.footers[i].name = this.navs[i].name;

                }
            })
        }
    },
    created (){
        this.foot();
        
    }
}


</script> 
<style  lang="scss" scoped>
    .bar{
        display:flex;
        position:fixed;
        height:0.6rem;
        bottom:0;
        width:100%;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        .tab-item{
        display:flex;
        height:0.60rem;
        flex-direction:column;
        flex:1;
        text-align:center;
        }
        i{width:0.26rem;margin:0 auto;font-size:0.2rem;}
    }
    .active{
        color:red;
    }
</style>