<template>
    <ul class="">
        <li v-for="(v,i) in arr" :key="i">
            <a :href="v.url">
              <p class="name"
                 :style="{color:v.color}">{{v.name}}</p>
              <p class="des">{{v.des}}</p>
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    created() {
        this.axios({
            method:"get",
            url:"/search"
        }).then((data)=>{
            console.log(data)
            this.arr=data.data.search;
            
        })
    },
    data() {
        return {
            arr:[]
        }
    },
}
</script>
<style  scoped>
ul{
    display: block;
    padding-top: 2.5rem;
}
li{
   float: left;
      width: 20%;
      height: 5rem;
      margin: 10px 6%;
      text-align: center; 
}
.name {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
      }
.des {
        color: #999;
        height: 17px;
        font-size: 12px;
        letter-spacing: 1px;
      }
</style>