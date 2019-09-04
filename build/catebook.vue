<template>
    <div class="catebook-box">
        <p class="title">分类浏览</p>
        <ul class="type-list">
            <li v-for="(v,i) in arr" :key="i">
                <a :href="v.url">{{v.name}}<span class="arrow"></span></a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    created() {
        this.axios({
            method:"get",
            url:"/catebooks"
        }).then((data)=>{
            console.log(data.data.catebook)
            this.arr=data.data.catebook;
            
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
    .catebook-box{
        margin-top: 1rem;
    }
    .catebook-box p{
        font-size: 1.5rem;
        height: 2.6rem;
        line-height: 2.6rem;
        padding: 0 1.6rem;
        display: inline-block;
    }
    .type-list{
         margin: 1.6rem 0 0 1.6rem;
        overflow: hidden;
    }
    .type-list li{
        float: left;
        box-sizing: border-box;
        width: 50%;
        padding-right: 1.8rem;
        height: 4.2rem;
        line-height: 4.2rem;
        font-size: 1.6rem;
        border-top: .1rem solid #eee;
        border-right: .1rem sorgb(218, 37, 37)#eee;
    }

    .type-list li a{
        color: #42bd56;
    }
    .type-list span{
        color: #ccc;
        float:right;
        font-weight: 700;
        display: inline-block;
        border-right: .1rem solid #ccc;
        border-bottom: .1rem solid #ccc;
        width: .8rem;
        height: .8rem;
        transform: rotate(-45deg);
        margin-top: 1rem;
    }

</style>