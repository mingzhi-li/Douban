<template>
    <div class="content-list">
        <div class="card">
            <div class="desc">
                <a href=""><img src="../../static/img/douban-logo.png" alt="cover"></a>
                <a href="">
                    <div class="user-info">
                        <strong>
                            豆瓣<span>写了日记</span>
                        </strong>
                        <div class="timestamp">2019-09-04 15:51:14</div>
                    </div>
                </a>
            </div>
            <div class="article-card">
                <div class="title">
                    豆瓣App 4.12.0 主要更新
                </div>
                <div class="detail">
                    - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
                </div>
            </div>
            <div class="info">
                <span class="btn like">
                    <i>4</i>
                </span>
                <span class="btn comment">
                    <i>0</i>
                </span>
                <span class="btn retweet">
                    <i>1</i>
                </span>
                <span class="btn more">
                    <i></i>
                </span>
            </div>
        </div>
        <a href="" class="list-link">显示更多广播</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
.card{
    position: relative;
    padding: 0 0 2rem 5rem;
    margin: 2rem 1.8rem;
}
.desc{
    margin-left: -5rem;
}
.desc img{
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
    border-radius: 50%;
}
a {
    background-color: transparent;
    text-decoration: none;
}
.user-info{
    display: inline-block;
}
.user-info strong{
    font-size: 1.7rem;
    line-height: 1;
    color: #494949;
}
.user-info strong span{
    color: #aaa;
    font-weight: 400;
}
.user-info .timestamp{
    font-size: 1.4rem;
    margin-top: .6rem;
    line-height: 1;
    color: #aaa;
}
.article-card{
    margin: 1rem 0 2rem;
    padding: 1.5rem;
    border-radius: .2rem;
    border: .1rem solid #d8d8d8;
}
.article-card .title{
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.4;
    color: #494949;
    margin-bottom: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.article-card .detail{
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #aaa;
    overflow: hidden;
    text-overflow: ellipsis;
}
.info span{
    margin-right: 2rem;
    font-size: 1.4rem;
}
.info .like:before {
    background: url(../../static/img/ic_like_gray.svg);
}
.btn:before {
    content: "";
    width: 2rem;
    height: 2rem;
    background-position: 50%;
    background-repeat: no-repeat;
    display: inline-block;
    margin-bottom: -.4rem;
}
.info i{
    font-style: normal;
    color: #ccc;
    margin-left: .3rem;
    margin-top: -.3rem;
}
.info .comment:before {
    background: url(../../static/img/ic_comment.svg);
}
.info .retweet:before {
    background: url(../../static/img/ic_retweet_gray.svg);
}
.info .more{
    float: right;
    margin-right: 0;
}
.info .more:before {
    background: url(../../static/img/ic_more.svg);
    background-repeat: no-repeat;
    background-position: 50%;
    margin-bottom: -.2rem;
}
.card:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .1rem;
    background: #e8e8e8;
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