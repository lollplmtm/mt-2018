<template>
    <div id="app-center-headline">
        <img :src="imgurl"/> 
        <div ref = "el" class="swiper-container">
            <div class="headline-list-item swiper-wrapper">
                <a class="center-headline-list swiper-slide" v-for = "headline in headlines" :key = "headline.id">
                    <span> {{ headline.title }}</span>
                    <img :src="headline.picture"/> 
                </a>
            </div>
        </div>
    </div>
</template>  

<script>
    import Vue from 'vue'
    import Swiper from 'swiper'
    export default {
        name:'AppCenterHeadline',
        data(){
            return {
                imgurl:'/static/2.png',
                headlines:[]
            }
        },
        methods:{
            getHeadlines(){
                this.$http.get('/dt/web/api/floors/v1',{
                    params:{
                        label: 0,
                        page: 1,
                        random: 0,
                    }
                }).then((res) =>{
                    //console.log(res.data.data.container.floor[3].content)
                    this.headlines = res.data.data.container.floor[8].content
                    Vue.nextTick(() => {
                        new Swiper(this.$refs.el, {
                            speed:2000,
                            autoplay: {
                                delay: 2000,
                                disableOnInteraction: false,
                                waitForTransition: false,
                            },
                            direction: 'vertical',
                            height:34
                        })
                    })       
                })
            }
        },
        created(){
            this.getHeadlines()
        }
    }

</script> 

<style lang="scss" scoped>
   #app-center-headline{
        width:100%;
        height:0.5rem;
        padding-left:0.1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        img{
            width:0.34rem;
            height:0.34rem;
        }
        .headline-list-item{
                display:flex;
                width:3.21rem;
                flex-direction:column;
                
                height:0.34rem;
                padding-left:0.1rem;

            a{
                display:flex;
                height:0.34rem;
                justify-content:space-between;
                align-items:center;
                span{
                    width:2.43rem;
                    height:0.34rem;
                    text-align:center;
                    line-height:0.34rem;
                }
                img{
                    width:0.68rem;
                    height:0.34rem;
                    margin-left:0.1rem;
                }
            }
        }
   }
</style>