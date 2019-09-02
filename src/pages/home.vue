<template>
    <div>
        <headerbar></headerbar>
        <div class="has-header">
            <subnav></subnav>
            <list></list>
            <loading></loading>
        </div>
    </div>
    
</template>
<script>
import headerbar from '../components/headerbar'
import subnav from '../components/subnav'
import list from '../components/list'
import loading from '../components/loading'

export default {
    name:'home',
    components:{
        headerbar,
        subnav,
        loading,
        list
    }
}
</script>
<style  scoped>
    
</style>