<template>
  <div>
    <h2>我是档案</h2>
    <p>我是档案内容，嘻嘻嘻</p>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
