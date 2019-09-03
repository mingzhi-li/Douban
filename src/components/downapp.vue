<template>
    <div class="banner">
        <div class="banner-bg">
            <img src="../../static/img/promotion_bg.b7abee9.jpg" alt="">
        </div>
        <div class="content">
            <span class="title">每天看点好内容</span>
            <div class="button-wrap">
                <span class="download">
                    极速下载
                </span>
                <span class="open">打开</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
    .banner{
        position: relative;
        height: 8rem;
    }
    .banner-bg{
        position: absolute;
    }
    .banner img {
        max-width: 100%;
    }
.content{
    position: absolute;
    right: 1rem;
    left: 1.8rem;
    display: flex;
    height: 8rem;
    justify-content: space-between;
    align-items: center;
}
.content .title{
    padding-left: 1.8rem;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.2rem;
    color: #2ca532;
}
.content .download{
    color: #fff;
    background: #42bd56;
}
.content .download, .content .open {
    display: inline-block;
    width: auto;
    padding: 0 1.4rem;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2;
    border: .1rem solid #42bd56;
    border-radius: .3rem;
}
.content .open{
    color: #42bd56;
}
</style>