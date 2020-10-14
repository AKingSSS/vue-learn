<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <!--显示子组件-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  /*created() {
    console.log("create");
    document.title="首页";
  }*/
}
</script>

<style scoped>

</style>
