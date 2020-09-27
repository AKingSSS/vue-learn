<template>
  <div>
    <h2 class="title">{{ message }}!!!</h2>
    <button @click="btnClick">点我</button>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from './Cpn'

export default {
  name: "App",
  components: {
    Cpn: Cpn
  },
  data() {
    return {
      message: 'Hello Python大星',
    }
  },
  methods: {
    btnClick() {
      console.log("btnClick")
    }
  }
}
</script>

<style scoped>
.title {
  color: royalblue;
}
</style>