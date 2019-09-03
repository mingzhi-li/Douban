<template>
    <div class="bannernav">
        <div class="title">
            <h3>{{title}}</h3>
            <span><a href="">更多</a></span>
        </div>
        <div class="swiper">
            <div class="small" v-for="(v,i) in arr"  :key="i">
                <img :src="v.images.medium" >
                <p class="film">{{v.title}}</p>
                <star :fivexx='v.rating.average'></star>
            </div>
        </div>
    </div>
</template>
<script>
import star from './star'
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        arr:{
            type:Array,
            required:true
        }

    },
    components:{
        star
    }
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
        font-size: 1.4rem;
    }
    span{
        height: 2.6rem;
        line-height: 2.6rem;
        font-size: 1rem;
    }
    span a{
        color: #42BD56;
    }
    .swiper{
        display: flex;
        overflow: auto;
    }
    .small{
        padding: 0 0.5rem;
    }
    img{
        display: block;
        width: 10rem;
        height: 15rem;
    }
    p{
        padding: 0.5rem 0;
        text-align: center;
        font-size: 0.8rem;
    }
    
    span .start{
        text-align: center;
    }
    
    
    
</style>