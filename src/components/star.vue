<template>
    <div class="star">
        <img v-for="(v,i) in num" :key="i" :src="'../../../static/img/'+v+'.png'"/>
         <span>{{fivexx}}</span>
    </div>
</template>
<script>
export default {
    props:["fivexx"],
    computed:{
        num(){
            var arr=[0,0,0,0,0];
            var a=parseInt(parseInt(this.fivexx)/2);
            for(let i=0;i<a;i++){
                arr[i]=2
            }
            // console.log( parseInt(this.fivexx)%2)
            parseInt(this.fivexx)%2==0?(arr[a]=2):(arr[a]=1);
            return arr;
        }
    }
}
</script>
<style scoped>
    .star{
        text-align: center;
    }
    img{
        width: 1rem;
        height:1rem;
    }
</style>
