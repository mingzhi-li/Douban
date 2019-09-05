<template>
    <div>
        <headerbar></headerbar>
        <div class="has-header">
            <downapp></downapp>
            <div class="info">
                <h2>
                    {{obj[0].title}}
                    <span class="badge">
                       {{obj[0].loc_name}}
                    </span>
                </h2>
                <div class="poster">
                    <img :src="obj[0].image" alt="">
                </div>
                <div class="detail">
                    <span>时间:&nbsp;&nbsp;</span>
                    <ul>
                        <li>{{obj[0].begin_time}}</li>
                        <li>{{obj[0].end_time}}</li>
                    </ul>
                </div>
                <div class="detail">
                    <span>地点:&nbsp;&nbsp;</span>
                    <ul>
                        <li>{{obj[0].address}}</li>
                    </ul>
                </div>
                <div class="detail">
                    <span>费用:&nbsp;&nbsp;</span>
                    <ul>
                        <li>{{obj[0].fee_str}}</li>
                    </ul>
                </div>
                <div class="detail">
                    <span>类型:&nbsp;&nbsp;</span>
                    <ul>
                        <li>{{obj[0].category_name}}</li>
                    </ul>
                </div>
                <div class="detail">
                    <span>起始时间:&nbsp;&nbsp;</span>
                    <ul>
                        <li>{{obj[0].owner.name}}</li>
                    </ul>           
                </div>
                
                <div class="describe">
                    <h2>活动详情</h2>
                    <div class="" v-html="obj[0].content">
                    </div>
                </div>

            </div>
            <download></download>
        </div>
    </div>
</template>
<script>
import headerbar from './headerbar'
import downapp from './downapp'
import download from './download'
export default {
    props:{
        items: {
        type: Array,
        required: true
    }
    },
    components:{
        headerbar,
        downapp,
        download
    },
    data() {
        return {
            obj:[],
            num:"",
            title:"",
        }
    },
    created() {
        this.num=this.$route.query.id;
        console.log(this.num)
        this.axios({
            method:"get",
            url:'/homes'
        }).then((data)=>{
            console.log(data.data.shouye)
            this.obj=data.data.shouye.filter((v,i)=>{
                if(v.id==this.num){
                    this.obj =data.data.shouye;
                    return v
                }
            })
        })
    },
}
</script>
<style  scoped>
.info{
    margin: 1rem;
}
.info h2{
    margin: 2rem 0;
    font-weight: 700;
    color: #494949;
}
.info .badge{
    display: inline-block;
    padding: .1rem .5rem;
    margin-bottom: .3rem;
    vertical-align: middle;
    line-height: 1.8rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #ff8263;
    border-radius: .2rem;
}
.info .poster img{
    width: 100%;
    max-width: 22rem;
    height: auto;
}
img{
    border-style: none;
}
.info .poster{
    margin: 2rem auto;
    text-align: center;
}
.detail{
    margin-left: 3.3rem;
    margin-bottom: 1rem;
    min-height: 1.5em;
    font-size: 1.4rem;
    clear: left;
}
.detail span{
    float: left;
    margin-left: -3.3rem;
    line-height: 150%;
    color: #666;
}
.detail ul{
    list-style-position: outside;
    margin-left: 0;
}
li {
    list-style: none;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
.tags li{
    display: inline-block;
    margin: 1rem 1rem 0 0;
    font-size: 1.5rem;
}
.tags a{
    display: block;
    padding: 0 1.2rem;
    line-height: 2.8rem;
    font-size: 1.5rem;
    border-radius: 2.8rem;
    text-align: center;
    color: #494949;
    background: #f5f5f5;
}
.describe h2{
    color: #072;
}
.describe .content{
    overflow: hidden;
    font-size: 1.4rem;
}
</style>