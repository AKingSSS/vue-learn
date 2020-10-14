<template>
  <div id="app">
    <!--  <router-link to="home" tag="button" replace>首页</router-link>
      &lt;!&ndash;router-link 默认解析为 a标签，tag可自定义标签， replace 防止浏览器来回切换&ndash;&gt;
      <router-link to="about" tag="button" replace>关于</router-link>
      <router-view></router-view>-->

    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="profileClick">档案</button>
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'Python大星',age:18,height:1.88}}" tag="button">档案</router-link>
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    homeClick() {
      // 通过代码方式修改路由
      this.$router.push("/home");// 浏览器可以返回
      console.log("homeClick");
    },
    aboutClick() {
      this.$router.push("/about");
      console.log("aboutClick")
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: 'kobe',
          age: 41,
          height: 1.98
        }
      })

    }
  }
}
</script>

<style>
.router-link-active {
  color: #f00;
}
</style>
