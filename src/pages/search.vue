<template>
    <div class="talion-view">
        <close></close>
    </div>
</template>
<script>
import close from '../components/close'
export default {
    components:{
        close,
    }
}
</script>
<style  scoped>
.talion-view{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 3;
}
</style>