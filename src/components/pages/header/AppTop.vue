<template>
    <div class="app-header-top">
        <div class=top-btn>x</div>
    </div>
</template>


<script>
    export default{
        name:'AppHeaderTop'
    }
</script>

<style lang="scss">
    .app-header-top{
        width:100%;
        height:0.5rem;
        background:#000;
        display:flex;
        justify-content:space-between;

        .top-btn{
            width:0.18rem;
            height:0.18rem;
            border:1px solid #9c9c9c;
            border-radius:100%;
            margin: 0 0.1rem;
            line-height: 0.16rem;
            font-size:0.16rem;
            text-align:center;
        }
    }
</style>   