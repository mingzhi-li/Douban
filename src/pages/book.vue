<template>
    <div>
        <headerbar></headerbar>
        <div class="has-header">
            <booknav></booknav>
            <findbook title="发现好书" ></findbook>
            <category></category>
            <download></download>
        </div>
    </div>
</template>
<script>
import headerbar from '../components/headerbar'
import booknav from '../components/booknav'
import findbook from '../components/findbook'
import category from '../components/category'
import download from '../components/download'
export default {
    components:{
        headerbar,
        booknav,
        findbook,
        category,
        download
    }
}
</script>
<style  scoped>

</style>