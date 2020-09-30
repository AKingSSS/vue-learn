<template>
  <div v-if="this.books.length">
    <table>
      <tr>
        <th>序号</th>
        <th>书籍名称</th>
        <th>出版日期</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
      <tr v-for="(book,index) in books">
        <th>{{ (index + 1) }}</th>
        <th>{{ book.name }}</th>
        <th>{{ book.date }}</th>
        <th>{{ numFilter(book.price) }}</th>
        <th>
          <button @click="sub(index)" v-bind:disabled="book.count <= 1" key="index">-</button>
          {{ book.count }}
          <button @click="add(index)">+</button>
        </th>
        <th>
          <button @click="remove(index)">移除</button>
        </th>
      </tr>
    </table>
    <div>总价：{{ numFilter(getAmount()) }}</div>
  </div>
  <div v-else><h2>购物车为空</h2></div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    books: Array,
    isDisabled: Boolean
  },
  methods: {
    add: function (index) {
      this.books[index].count++;
    },
    sub: function (index) {
      if (this.books[index].count > 1) {
        this.books[index].count--;
      }
    },
    remove: function (index) {
      console.log("index = " + index);
      this.books.splice(index, 1);
      console.log(this.books);
    },
    // 截取当前数据到小数点后两位
    numFilter: function (value) {
      const realVal = parseFloat(value).toFixed(2);
      return '¥' + realVal;
    },
    getAmount: function () {
      let amount = 0;
      for (let book of this.books) {
        amount += book.price * book.count;
      }
      return amount;
    }
  }
}
</script>

<style>
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}

th,td {
  padding: 0px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}
</style>
