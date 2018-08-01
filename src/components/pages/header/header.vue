<template>
    <div id="app-header">
        <app-header-top></app-header-top>
        <app-header-banner></app-header-banner>
    </div>
</template>  

<script>
    import AppHeaderTop from './AppTop'
    import AppHeaderBanner from './headerBanner'

    export default {
        name:'AppHeader',
        components:{
            AppHeaderTop,
            AppHeaderBanner

        }
    }

</script> 

<style lang="scss">
   
</style>