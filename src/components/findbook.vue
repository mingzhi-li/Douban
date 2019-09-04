<template>
    <div class="bannernav">
        <div class="title">
            <h3>{{title}}</h3>
            <span><a href="">更多</a></span>
        </div>
        <div class="content">
            <ul class="onlyString">
                <li v-for="(v,i) in arr" :key="i" class=""  style="border-color: rgb(255, 172, 45);">
                    <a :href="v.href" :style="{color:v.color}" v-if="!v.line">{{v.title}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        }
    },
    created() {
        this.axios({
            method:"get",
            url:"/findbooks"
        }).then((data)=>{
            //console.log(data)
            this.arr=data.data.findbook;
            
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
    .bannernav{
        margin:0rem 1.6rem;
    }
    .title{
        display: flex;
        padding: 0rem 1.6rem;
    }
    h3{
        flex: 1;
        height: 2.6rem;
        line-height: 2.6rem;
        color: #191919;
        font-size: 0.16rem;
    }
    span{
        height: 2.6rem;
        line-height: 2.6rem;
        font-size: 0.16rem;
    }
    span a{
        color: #42BD56;
    }
    .content{
        box-sizing: content-box;
    }
    .onlyString {
        overflow-x: auto;
        white-space: nowrap;
    }   
    .onlyString li{
        
        display: inline-block;
        margin: 0 0 .8rem 1.6rem;
        font-size: 1.6rem;
        border: .1rem solid;
        border-radius: .4rem;
        vertical-align: middle;
    }
    .onlyString a {
       
        height: 5rem;
        line-height: 5rem;
        padding: 0 2.4rem;
        letter-spacing: .16rem;
        overflow: auto;
        display: block;
        text-align: center;
    }
    li:empty {
    width: 100%;
    display: block;
    height: 0.1rem;
    border: 0;
    margin: 0;
  }
</style>