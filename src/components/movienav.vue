<template>
    <div>
        <bannernav title="影院热映" :arr="arr1"></bannernav>
        <bannernav title="免费在线观影" :arr="arr2"></bannernav>
        <bannernav title="新片速递" :arr="arr3"></bannernav>
        
    </div>
</template>
<script>
import bannernav from './bannernav'
export default {
    components:{
        bannernav,
    },
    created() {
        this.axios({
            method:"get",
            url:"/movies"
        }).then((data)=>{
            //console.log(data.data.movie)
            var arrs=data.data.movie;
            arrs.filter((v,i)=>{
                if(i<10){
                    this.arr1.push(arrs[i])
                }
                return;
            })
            arrs.filter((v,i)=>{
                if(i>10&&i<20){
                    this.arr2.push(arrs[i])
                }
                return;
            })
            arrs.filter((v,i)=>{
                if(i>20&&i<31){
                    this.arr3.push(arrs[i])
                }
                return;
            })
            
        })
    },
    data() {
        return {
            arr1:[],
            arr2:[],
            arr3:[]
        }
    },
}
</script>
<style  scoped>

</style>