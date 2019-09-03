<template>
    <div>
        <headerbar></headerbar>
        <div class="has-header">
            <movienav></movienav>
            <findmovie title="发现好电影" ></findmovie>
            <category></category>
            <download></download>
        </div>
    </div>
</template>
<script>
import headerbar from '../components/headerbar'
import movienav from '../components/movienav'
import findmovie from '../components/findmovie'
import category from '../components/category'
import download from '../components/download'
export default {
    components:{
        headerbar,
        movienav,
        findmovie,
        category,
        download
    }
}
</script>
<style  scoped>

</style>