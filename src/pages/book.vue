<template>
    <div>
        <headerbar></headerbar>
        <div class="has-header">
            <booknav></booknav>
            <findbook title="发现好书" ></findbook>
            <catebook></catebook>
            <download></download>
        </div>
    </div>
</template>
<script>
import headerbar from '../components/headerbar'
import booknav from '../components/booknav'
import booklist from '../components/booklist'
import findbook from '../components/findbook'
import catebook from '../components/catebook'
import download from '../components/download'
export default {
    components:{
        headerbar,
        booknav,
        booklist,
        findbook,
        catebook,
        download
    }
}
</script>
<style  scoped>

</style>