<template>
    <div id="app-header">
        <app-header-top></app-header-top>
        <app-header-search></app-header-search>
        <app-header-nav></app-header-nav>
        <app-center></app-center>
        <app-footer></app-footer>
    </div>
</template>  

<script>
    import AppHeaderTop from './AppTop'
    import AppHeaderSearch from './AppSearch'
    import AppHeaderNav from './AppNav'
    import AppCenter from '../center/appCenter'

   
    export default {
        name:'AppHeader',
        components:{
            AppHeaderTop,
            AppHeaderSearch,
            AppHeaderNav,
            AppCenter
        }
    }

</script> 

<style lang="scss" scoped>
   
</style>