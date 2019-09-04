<template>
    <div class="bannernav">
        <div class="title">
            <h3>{{title}}</h3>
            <span><a href="">更多</a></span>
        </div>
        <div class="content">
            <div class="promItem">
                <img src="../../static/img/book_zw.fc645eb.jpg" class="cover">
                <div class="content">
                    <span class="price">¥ 68</span>
                    <p class="name">造物</p>
                    <p class="info">改变世界的万物图典，3000幅图里的发明与冒险</p>
                </div>
            </div>
            <ul class="hascover"></ul>
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
.swiper img{
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
.content{
    box-sizing: content-box;
}
.promItem{
    overflow: hidden;
    margin: 1.6rem 1.8rem .8rem 1.6rem;
}

.content img{
    float: left;
    width: 10rem;
    margin-right: 1.5rem;
    border-style: none;
    margin-right: 1rem;
    box-sizing: content-box;
}
.price{
    float: right;
    color: #e76648;
    font-size: 1.6rem;
    line-height: 2.2rem;
}
.name{
    font-size: 2rem;
    color: #494949;
    margin: 1rem;
    max-width: 100%;
    line-height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}
.info{
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 1.5;
    color: #9b9b9b;
}
.content ul{
    padding: .8rem 0;
}
.hascover{
    overflow-x: auto;
    white-space: nowrap;
    text-align: center;
}
</style>