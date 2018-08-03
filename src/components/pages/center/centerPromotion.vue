<template>
    <div id="app-center-promotion">
        <div class="center-promotion-list1">
            <img :src="list1[0].imagePath" class="img1"/>
            <img :src="list1[1].imagePath" class="img2" />
            <img :src="list1[2].imagePath" class="img3" />
        </div>
        <div class="center-promotion-list2">
            <img :src="list2[0].imagePath" />
            <img :src="list2[1].imagePath" />
        </div>
    </div>
</template>  

<script>
    export default {
        name:'AppCenterPromotion',
        data(){
            return {
                list1:[],
                list2:[]
            }
        },
        methods:{
            getPromotion(){
                this.$http.get('/dt/web/api/floors/v1',{
                    params:{
                        label: 0,
                        page: 1,
                        random: 0,
                    }
                }).then((res) =>{
                    console.log(res.data.data.container.floor[9].content)
                    this.list1 = res.data.data.container.floor[9].content
                    //let _res = res.data.data.container.floor[9].content
                        _
                    //this.list1 = this.list1.assign(_res.forEach((item) => {return item}))
                    this.list2 = res.data.data.container.floor[10].content
                })
            }
        },
        created(){
            this. getPromotion()

        }
    }   

</script> 

<style lang="scss" scoped>
    #app-center-promotion{
        width:100%;
        height:1.88rem;
        .center-promotion-list1{
            width:100%;
            height:1.25rem;
            display:flex;
            justify-content:space-between;
            .img1{
                width:1.875rem;
            }
            .img2{
                width:0.9375rem;
            }
            .img3{
                width:0.9375rem;
            }
        }
        .center-promotion-list2{
            width:100%;
            display:flex;
            justify-content:space-between;
            height:0.63rem;
            img{
                width:1.875rem;
            }
        }
    }
</style>