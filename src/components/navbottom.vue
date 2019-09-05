<template>
    <div class="sub-nav">
        <ul class="navBottom">
            <li class="nav-item">
                <a href="#/reg" class="">注册账号</a>
                <a href="#/login" class="">登陆豆瓣</a>
            </li>
            <li class="nav-item">
                <a href="https://movie.douban.com/" class="">使用桌面版</a>
                <a href="#" class="">使用豆瓣APP</a>
            </li>
        </ul>
    </div>
    
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.sub-nav{
    clear: both;
    margin: 0 1.8rem;
    padding-top: .2rem;
}
.navBottom{
    width: 100%;
    border-bottom: .1rem solid #f3f3f3;
}
div{
    display: block;
}
.navBottom .nav-item{
    border-top: .1rem solid #f3f3f3;
    padding: 1.3rem 0;
    text-align: center;
}

.navBottom a{
    width: 49%;
    display: inline-block;
    margin: 0 auto;
    
    font-size: 1.5rem;
    color: #42bd56;
}
.navBottom a:first-child {
    border-right: .1rem solid #e5e5e5;box-sizing: border-box;
}
</style>