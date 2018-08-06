<template>
    <div class="app-message page">
        <header class="header">
            <a @click="$router.go(-1)" class="fa fa-chevron-left"></a>
            <h1>消息中心</h1>
            <a @click="$router.go(-1)" class="fa fa-qrcode"></a>
        </header>
        <a class="message" href="http://chat.9ji.com/m/index.aspx?SourceUrl=http://m.9ji.com/user/mymsg.aspx&t=0.7296238634311918"><i class="fa fa-volume-control-phone"></i><div class="right">客服咨询</div></a>
        <a class="message" href="https://m.9ji.com/user/mymsgDetail.aspx?msg=xiaoxi"><i class="fa fa-volume-off"></i><div class="right">消息通知</div></a>
        <a class="message" href="https://m.9ji.com/user/mymsgDetail.aspx?msg=huodong"><i class="fa fa-gift"><span></span></i><div class="right">九机活动<p>银行级加密系统🔒超B级防盗锁芯🔒官网最高直降1000元，免费送货上门+安装🔒免息分期每月低至133元起!</p></div></a>

         <app-footer></app-footer>
    </div>
</template>
<script>
export default {
    name: 'app-message'
}
</script>

<style lang="scss">
    .header{
        height:0.5rem;
        width:100%;
        display:flex;
        color:#000;
        background:#f5f5f5;
        .fa{
        flex:2;
        line-height:0.5rem;
        text-align:center;
         font-size:0.2rem;
        }
        h1{
        flex:10;
        text-align:center;
        line-height:0.5rem;
        font-size:0.2rem;
        font-weight:bold;
        }
    }
    .message{
        height:0.7rem;
        display:flex;
        span{
            position: absolute;
            width: 0.12rem;
            height: 0.12rem;
            background: #ff5500;
            z-index: 1;
            border-radius: 100%;
            right: -0.04rem;
            top: -0.04rem 
                }
        i{
            display:block;
            position:relative;
            width:0.5rem;
            height:0.5rem;
            margin:0.1rem;
            text-align:center;
            line-height:0.5rem;
            font-size:0.3rem;
            color:#fff;
            border-radius: 0.2rem;


        }
        .fa-volume-control-phone{
            background:pink;
        }
        .fa-volume-off{
            background:#0080FF;
        }
        .fa-gift{
            background:#FF8000;
        }
        .right{
            width:82%;
            padding: 0.18rem 0.1rem 0.09rem 0.1rem;
            line-height: 0.23rem;
            color:#000;
            font-size:0.16rem;
            font-weight:bold;
            border-bottom:1px solid #dfdfdf;
            p{
            font-size:0.12rem;
            font-weight:normal; 
            line-height:0.24rem;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap
            }
 
        }
    }
    
</style>
