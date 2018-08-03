<template>
    <div id="app-center-optimization">
        <div class="center-optimization-title">
            <a>
                <img :src="optimizationTitle[0].imagePath" />
            </a>
        </div>
        <div class="center-optimization-list swiper-container" ref = "el">
            <div class="swiper-wrapper">
                <a class="swiper-slide" v-for = "list in optimizationList" :key = "list.id">
                    <img :src="list.imagePath" />
                    <p> {{ list.title }} </p>
                    <p class="p1"> {{ list.sellingPoint }} </p>
                    <span>￥ {{ list.price }} </span>
                </a>
            </div>
        </div>
    </div>
</template>  

<script>
    import Vue from 'vue'
    import Swiper from 'swiper'
    export default {
        name:'AppCenterOptimization',
        data(){
            return {
                optimizationTitle:[],
                optimizationList:[]
            }
        },
        methods:{
           getOptimization(){
                 this.$http.get('/dt/web/api/floors/v1',{
                    params:{
                        label: 0,
                        page: 1,
                        random: 0,
                    }
                }).then((res) =>{
                    //console.log(res.data.data.container.floor[11].content)
                    this.optimizationTitle = res.data.data.container.floor[11].content
                }),
                this.$http.get('/dt/web/api/floors/specialEnjoy/v1',{
                    params:{
                        label: 0,
                        page: 1,
                        random: 0,
                    }
                }).then((res) =>{
                    //console.log(res.data.data.optimize)
                    this.optimizationList = res.data.data.optimize
                     Vue.nextTick(() => {
                         new Swiper(this.$refs.el, {
                            slidesPerView : 3
                         })
                    })
                })
            }
        },
        created(){
            this.getOptimization()
        }
    }

</script> 

<style lang="scss" scoped>
    #app-center-optimization{
        margin-top:0.1rem;
        .center-optimization-title{
            width:100%;
            height:0.44rem;
            img{
                width:100%;
                height:0.44rem;
            }
       }
       .center-optimization-list{
            width:100%;
            height:2rem;
            padding:0.1rem;
            display:flex;
            overflow:hidden;
            justify-content:space-between;
            a{
                width:1.2rem;
                height:100%;
                margin-left:0.1rem;
                img{
                    width:1.2rem;
                    height:1.2rem;
                    border:1px solid #efefef;
                }
                p{
                    margin-top:0.03rem;
                    color:#333;
                    overflow:hidden;
                    white-space:nowrap;
                }
                p.p1{
                    color:#9c9c9c;
                }
                span{
                    display:block;
                    margin-top:0.03rem;
                    color:#c80f1e;
                }
            }
       }
    }
</style>