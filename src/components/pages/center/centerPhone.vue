<template>
    <div id="app-center-phone">
        <div class="center-phone-title">
            <a>
                <img :src="phoneTitle[0].imagePath" />
            </a>
        </div>
        <div class="center-phone-list">
            <a v-for = "item in phoneList" :key = "item.id">
                <img :src="item.imagePath" />
            </a>
        </div>
        <div class="center-phone-list1">
            <a v-for = "item1 in phoneList1" :key = "item1.id">
                <img :src="item1.imagePath" />
            </a>
        </div>
    </div>
</template>  

<script>
    export default {
        name:'AppCenterPhone',
        data(){
            return {
                phoneTitle:[],
                phoneList:[],
                phoneList1:[]
            }
        },
        methods:{
            getPhone(){
                this.$http.get('/dt/web/api/floors/v1',{
                    params:{
                        label: 0,
                        page: 1,
                        random: 0,
                    }
                }).then((res) =>{
                    //console.log(res.data.data.container.floor[13].content)
                    this.phoneTitle = res.data.data.container.floor[13].content
                }),
                this.$http.get('/dt/web/api/floors/v1',{
                    params:{
                        label: 0,
                        page: 1,
                        random: 0,
                    }
                }).then((res) =>{
                    //console.log(res.data.data)
                    this.phoneList = this.phoneList.concat(res.data.data.container.floor[14].content,res.data.data.container.floor[15].content)
                    this.phoneList1 = res.data.data.container.floor[16].content
                })
            }
        },
        created(){
            this.getPhone()
        }
    }

</script> 

<style lang="scss" scoped>
    #app-center-phone{
        margin-top:0.1rem;
        .center-phone-title{
            width:100%;
            height:0.44rem;
            img{
                width:100%;
                height:0.44rem;
            }
       }
        .center-phone-list{
            width:100%;
            height:2.4996rem;
            display:flex;
            flex-wrap:wrap;
            justify-content:space-between;
            img{
                width:1.875rem;
                height:1.2498rem;
            }
        }
        .center-phone-list1{
            width:100%;
            height:0.625rem;
            display:flex;
            justify-content:space-between;
            img{
                width:1.875rem;
                height:0.625rem;
            }
        }
    }
</style>