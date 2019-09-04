<template>
    <div>
        <headerbar></headerbar>
        <div class="has-header">
            <downapp></downapp>
            <userbar></userbar>
            <statuslist></statuslist>
            <download></download>
        </div>
        
    </div>
</template>
<script>
import headerbar from '../components/headerbar'
import downapp from '../components/downapp'
import userbar from '../components/userbar'
import statuslist from '../components/statuslist'
import download from '../components/download'
export default {
    components:{
        headerbar,
        downapp,
        userbar,
        statuslist,
        download
    }
}
</script>
<style  scoped>

</style>