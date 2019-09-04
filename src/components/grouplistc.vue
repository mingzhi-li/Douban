<template>
<div>
    <div class="group" >
        <div class="header">
            <h2>买买买</h2>
        </div>
        <ul class="content" v-for="(v,i) in arr" :key="i">
            <li>
                <a href="" class="">
                    <div class="group-meta">
                        <img :src="arr[i].images.small" alt="">
                        <div class="group-info">
                            <span>{{arr[i].title}}</span>
                        </div>
                        <span class="group-member">
                            {{arr[i].group_member}}
                        </span>
                    </div>
                    <div class="group-topic">
                        <span>{{arr[i].group_topic.time}}</span>
                        <span>{{arr[i].group_topic.title}}</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
    <a href="" class="list-link">更多相关小组</a>
</div>
    
</template>
<script>
export default {
    created() {
        this.axios({
            method:"get",
            url:"/xiaozuc"
        }).then((data)=>{
            this.arr=data.data.xiaozuc;
            
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
.group{
    margin-left: 1.8rem;
    padding-top: 1.4rem;
}
h2 {
    font-size: 1.68rem;
    font-weight: 400;
    color: #111;
}
.content{
    position: relative;
}
li{
    border-bottom: 1px solid #f2f2f2;
    overflow: hidden;
    list-style: none;
}

.content a{
    display: block;
    padding: 1.5rem 1.8rem 1.5rem 0;
    text-decoration: none;
    color: -webkit-link;
    cursor: pointer;
    text-decoration: none;
}
.content .group-meta {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
}
.content .group-meta img{
    width: 4rem;
}
.content .group-info{
    -ms-flex: 1;
    flex: 1;
    padding: 0 1rem;
    font-size: 1.8rem;
    color: #111;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.content .group-member{
    color: #ccc;
    font-size: 1.5rem;
}
.content .group-topic{
    margin-top: 1rem;
    font-size: 1.5rem;
    color: #aaa;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.list-link{
    display: block;
    padding: 1.5rem 0;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    color: #42bd56;
}
</style>