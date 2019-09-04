<template>
    <div>
        <loading v-if="arrs.length<=0"></loading>
        <div class="list" v-else>
            <router-link to="/detail" class="thumbnail" v-for="(v,i) in arrs" :key="i">
                <div class="content" >
                    <img :src="arrs[i].image" alt="cover">
                    <h3>{{arrs[i].title}}</h3>
                    <p>{{newarr[i]}}</p>
                </div>
                <div class="author">
                    <span class="name">{{arrs[i].category_name}}</span>
                    <span class="label" v-if="arrs[i].subcategory_name">本活动来自栏目 {{arrs[i].subcategory_name}} </span>
                </div>
            </router-link>
        </div>
    </div>
    
</template>
<script>
import loading from '../components/loading'
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
            var arr=data.data.shouye;
            this.arrs=data.data.shouye;
            for(var i=0;i<arr.length;i++){
                this.newarr.push(arr[i].content.substring(0,2))
            }
        })
        },1000)
        
    },
    name: 'list',
    
    data() {
        return {
            arrs:[],
            newarr:[]
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