<template>
  <div>
    <h2>我是 cpn 组件</h2>
    <p>我是 cpn 组件的内容</p>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name:'CPN'
    }
  }
}
</script>

<style scoped>

</style>