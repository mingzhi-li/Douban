<template>
    <div>
        <headerbar></headerbar>
        <div class="has-header">
            <userbar></userbar>
            <grouplista></grouplista>
            <grouplistb></grouplistb>
            <grouplistc></grouplistc>
            <download></download>
        </div>
    </div>
</template>
<script>
import headerbar from '../components/headerbar'
import userbar from '../components/userbar'
import grouplista from '../components/grouplista'
import grouplistb from '../components/grouplistb'
import grouplistc from '../components/grouplistc'
import download from '../components/download'
export default {
    components:{
        headerbar,
        userbar,
        grouplista,
        grouplistb,
        grouplistc,
        download
    }
}
</script>
<style  scoped>

</style>