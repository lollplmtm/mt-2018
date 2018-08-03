<template>
    <div id="app-center">
        <app-center-banner></app-center-banner>
        <app-center-picture></app-center-picture>
        <app-center-headline></app-center-headline>
        <app-center-promotion></app-center-promotion>
        <app-center-optimization></app-center-optimization>
        <app-center-phone></app-center-phone>
    </div>
</template>  

<script>
    
    import AppCenterBanner from './centerBanner'
    import AppCenterPicture from './centerPicture'
    import AppCenterHeadline from './centerHeadline'
    import AppCenterPromotion from './centerPromotion'
    import AppCenterOptimization from './centerOptimization'
    import AppCenterPhone from './centerPhone'
    export default {
        name:'AppCenter',
        components:{ 
            AppCenterBanner,
            AppCenterPicture,
            AppCenterHeadline,
            AppCenterPromotion,
            AppCenterOptimization,
            AppCenterPhone
        }
    }

</script> 

<style lang="scss" scoped>
   
</style>