<template>
  <div class="header-bar">
    <h1 class="title">
      <router-link to="/home">豆瓣</router-link>
    </h1>
    <ul class="nav">
      <li>
        <router-link style="color: #2384E8" :to="{ name: 'movie'}">
          电影
        </router-link>
      </li>
      <li>
        <router-link style="color: #9F7860" :to="{ name: 'book'}">
          图书
        </router-link>
      </li>
      <li>
        <router-link style="color: #E4A813" :to="{ name: 'status'}">
          广播
        </router-link>
      </li>
      <li>
        <router-link style="color: #2AB8CC" :to="{ name: 'group'}">
          小组
        </router-link>
      </li>
    </ul>
    <span class="talion" @click="showTalion"></span>
  </div>
</template>
<script>
export default {
    name: 'header-bar',
  data () {
    return {}
  },
  methods: {
    showTalion: function () {
      this.$emit('showTalion')
    }
  }
}
</script>
<style scoped>
    .title{
      flex: 1;
      max-width: 4.6rem;
      max-height: 2.2rem;
      margin-right: 1.8rem;
      font-size: 0;
      line-height: 3.2rem;
      color: #00b600;
      word-break: break-all;
      background: url(../../static/img/home.png);
      background-size: cover;
    }
    a {
      display: block;
    }
    ul {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
  li {
    display: inline-block;
    font-size: 1.6rem;
    margin-right: 1.2rem;
  }.talion {
    font-size: 0;
    background: url(../../static/img/search.png) no-repeat;
    background-size: cover;
    width: 2.4rem;
    height: 1.8rem;
    margin-top: 0.4rem;
  }
</style>