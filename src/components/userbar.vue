<template>
    <div class="user-bar">
        <div class="avatar">
            <img src="../../static/img/avatar.jpg" alt="未登录">
        </div>
        <div class="holder">
            请先登录
        </div>
        <div class="icon icon-camera">

        </div>
        <div class="icon icon-pen">

        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    
  }

</script>
<style  scoped>
.user-bar{
    margin-bottom: 1.5rem;
}
.user-bar{
    position: relative;
    padding: 1rem 1.8rem;
    overflow: hidden;
}
.user-bar:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .1rem;
    background: #e8e8e8;
}
.user-bar .avatar{
    width: 4rem;
    height: 4rem;
    float: left;
}
.user-bar .avatar img{
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
img {
    border-style: none;
}
.user-bar .holder{
    float: left;
    padding-left: 1rem;
    line-height: 4rem;
    font-size: 1.5rem;
    color: #aaa;
}
.user-bar .icon{
    content: "";
    width: 4rem;
    height: 4rem;
    padding: .8rem;
    margin-left: .8rem;
    float: right;
    box-sizing: border-box;
}
.user-bar .icon-camera:before {
    background-image: url(../../static/img/icon-camera.svg);
}
.user-bar .icon-pen:before {
    background-image: url(../../static/img/icon-pen.svg);
}
.user-bar .icon:before {
    content: "";
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    background-position: 50%;
    background-repeat: no-repeat;
}

  

</style>