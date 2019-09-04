<template>
    <div class="header-bar">
        <span class="close-talion" @click="closeSearch">
            关闭
        </span>
        <form class="search" onsubmit="return false">
            <input type="search" name="query">
        </form>
    </div>
        
</template>
<script>
export default {
    methods: {
        closeSearch(){
            this.$router.go(-1);
        }
    },
}
</script>
<style  scoped>
.close-talion{
    color: #42bd56;
    font-size: 1.6rem;
}
.search{
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    padding-left: 1rem;
}
input[type=search]{
    box-sizing: border-box;
    border: 0;
    background: url(../../static/img/search-small.png) no-repeat 50% #f3f3f3;
    background-size: 1.73rem;
    border-radius: .3rem;
    width: 100%;
    height: 3.2rem;
    font-size: 1.4rem;
}
[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}
input {
    overflow: visible;
}
</style>