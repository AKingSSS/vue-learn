<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Book :books="books" :isDisabled="isDisabled"></Book>
  </div>
</template>

<script>
import Book from './components/Books.vue'

export default {
  name: 'App',
  data() {
    return {
      books: [{
        name: 'Python从入门到放弃',
        date: '2020-09-01',
        price: 80.00,
        count: 1
      }, {
        name: 'Java从入门到放弃',
        date: '2020-10-01',
        price: 100.00,
        count: 1
      }, {
        name: 'Go从入门到放弃',
        date: '2020-11-11',
        price: 120.00,
        count: 1
      }],
      isDisabled: false,
    }
  },
  components: {
    Book
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
