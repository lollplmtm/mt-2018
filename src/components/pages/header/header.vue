<template>
    <div id="app-header">
        <app-header-top></app-header-top>
        <app-header-search></app-header-search>
        <app-header-nav></app-header-nav>
    </div>
</template>  

<script>
    import AppHeaderTop from './AppTop'
     import AppHeaderSearch from './AppSearch'
      import AppHeaderNav from './AppNav'
   
    export default {
        name:'AppHeader',
        components:{
            AppHeaderTop,
            AppHeaderSearch,
            AppHeaderNav
        }
    }

</script> 

<style lang="scss" scoped>
   
</style>