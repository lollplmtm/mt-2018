<template>
    <div class="app-header-nav">
        <div class="app-nav-list" v-for = "nav in navs" :key = "nav.id"> {{ nav.title }} </div>
    </div>
</template>  

<script>
    export default {
        name:'AppHeaderNav',
        data(){
            return {
                navs:[]
            }
        },
        methods:{
            getNavs(){
                this.$http.get('/dt/web/api/floors/v1',{
                    params:{
                        label: 0,
                        page: 1,
                        random: 0,
                    }
                }).then((res) =>{
                    //console.log(res.data.data.label) 
                    this.navs = res.data.data.label
                })
            }
        },
        created(){
            this.getNavs()
        }
    }

</script> 


<style lang="scss">
    .app-header-nav{
        width:100%;
        height:0.4rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .app-nav-list{
           text-align:center;
           line-height:0.4rem;
            height: 0.4rem;
            padding:0 0.05rem;
            float:left;
        }
    }
</style>