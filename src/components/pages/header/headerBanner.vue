<template>
    <div ref = "el" id="app-header-banner" class="swiper-container">
        <div class="swiper-wrapper">
        <div
            v-for = " (banner, i) in banners "
            :key = " i "
        class="swiper-slide loading-img">
            <img :src="banner.imagePath" alt="">
        </div>
    </div>
    <div class="swiper-pagination"></div>
    </div>
</template>    

<script>
    import Vue from 'vue'
    import Swiper from 'swiper'
    export default{
        name:'AppHeaderBanner',
        data(){
            return {
                banners:[]
            }
        },
        methods:{
            getBanners(){
                this.$http.get('/dt/web/api/floors/v1',{
                    params:{
                        label: 0,
                        page: 1,
                        random: 0,
                    }
                }).then((res) =>{
                    // console.log(res.data.data.container.floor[0].content)
                    this.banners = res.data.data.container.floor[0].content
                    Vue.nextTick(() => {
                         new Swiper(this.$refs.el, {
                             pagination: {
                                el: '.swiper-pagination'                        
                             }
                         })
                    })
                })
            }
        },
        created(){
            this.getBanners()
        }
    }
    
</script>


<style lang="scss">
 .swiper-wrapper {
        width: 100%;
        height: 1.875rem;
    }
    .swiper-slide {
        img {width: 100%; }
    }
    .swiper-pagination  {
        
        span {
            background: blue;
        }
        /* width: 5px; height: 5px;
        &.swiper-pagination-bullet-active {
            background: #fff;
        } */
    }
</style>