<template>
    <div>
        <bannernav title="最受关注图书｜虚构类" :arr="arr1"></bannernav>
        <bannernav title="最受关注图书｜非虚构类" :arr="arr2"></bannernav>
        <bannernav title="豆瓣纸书" :arr="arr3"></bannernav>
        
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
            url:"/books"
        }).then((data)=>{
            console.log(data.data.book)
            var arrs=data.data.book;
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