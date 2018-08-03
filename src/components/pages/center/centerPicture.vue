<template>
    <div id="app-center-picture" class="center-picture-list">
        <div class="picture-list-item" v-for = "picture in pictures" :key = "picture.id">
            <img :src="picture.imagePath" />
        </div>
    </div>
</template>  

<script>
    export default {
        name:'AppCenterPicture',
        data(){
            return {
                pictures:[]
            }
        },
        methods:{
            getPictures(){
                this.$http.get('/dt/web/api/floors/v1',{
                    params:{
                        label: 0,
                        page: 1,
                        random: 0,
                    }
                }).then((res) =>{
                    // console.log(res.data.data.container.floor[1].content)
                     this.pictures = res.data.data.container.floor[1].content
                   
                })
            }
        },
        created(){
            this.getPictures()
        }
    }

</script> 

<style lang="scss" scoped>
   .center-picture-list{
        width:100%;
        height:0.75rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        img{
            width:0.75rem;
            height:0.75rem;
        }
   }
</style>