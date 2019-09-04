<template>
    <div>
        <headerbar></headerbar>
        <div class="has-header">
            <subnav></subnav>
            <list></list>
        </div>
    </div>
</template>
<script>
import headerbar from '../components/headerbar'
import subnav from '../components/subnav'
import list from '../components/list'

export default {
    name:'home',
    components:{
        headerbar,
        subnav,
        list
    }

}
</script>
<style  scoped>
    
</style>