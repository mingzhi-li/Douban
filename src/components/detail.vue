<template>
    <div>
        <headerbar></headerbar>
        <div class="has-header">
            <downapp></downapp>
            <detaills></detaills>
            <download></download>
        </div>
    </div>
</template>
<script>
import headerbar from './headerbar'
import downapp from './downapp'
import detaills from './detaills'
import download from './download'
export default {
    components:{
        headerbar,
        downapp,
        detaills,
        download
    }
}
</script>
<style  scoped>

</style>