<template>
    <div>
        <loading v-if="obj.length<=0"></loading>
        <div class="list" v-else>
            <router-link :to="{name:'detail',query:{'id':v.id}}" class="thumbnail" v-for="(v,i) in obj" :key="i" @click="funLink(v.id)">
                <div class="content" >
                    <img :src="obj[i].image" alt="cover">
                    <h3>{{obj[i].title}}</h3>
                    <p>{{newobj[i]}}</p>
                </div>
                <div class="author">
                    <span class="name">{{obj[i].category_name}}</span>
                    <span class="label" v-if="obj[i].subcategory_name">本活动来自栏目 {{obj[i].subcategory_name}} </span>
                </div>
            </router-link>
        </div>
    </div>
    
</template>
<script>
import loading from './loading'
export default {
    components:{
        loading
    },
    created() {
        setTimeout(()=>{
            this.axios({
            method:"get",
            url:"/homes"
        }).then((data)=>{
            console.log(data.data.shouye)
            var obj=data.data.shouye;
            this.obj=data.data.shouye;
            for(var i=0;i<obj.length;i++){
                this.newobj.push(obj[i].content.substring(0,30))
            }
        })
        },1000)
        
    },
    methods: {
        funLink(i){
            console.log(i)
            this.$router.push("./detail?id="+i)
        }
    },
    name: 'list',
    
    data() {
        return {
            obj:[],
            newobj:[]
        }
    },
}
</script>
<style  scoped>
    .list .thumbnail {
        position: relative;
        display: block;
        padding: 2.5rem 1.8rem 2.5rem 0;
        margin-left: 1.8rem;
    }
    .content {
      overflow: hidden;
      margin-bottom: 1rem;
    }
    h3 {
      margin-top: 0;
      margin-bottom: 0.6rem;
      line-height: 1.41;
      text-align: justify;
      font-size: 1.7rem;
      font-weight: 500;
      color: #494949;
    }
    p {
      line-height: 1.5;
      text-align: justify;
      color: #aaa;
      font-size: 1.2rem;
      overflow: hidden;
    }
    img {
      float: right;
      width: 25.6%;
      height: 8.678rem;
      margin-left: 2.5rem;
    }
    .author {
      font-size: 1.2rem;
      color: #ccc;
    }
    .label {
      position: absolute;
      bottom: 2.5rem;
      right: 1.8rem;
    }
    .thumbnail ~ .thumbnail::before {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 0.1rem;
        content: '';
        background: #e3e3e3;
    }
</style>