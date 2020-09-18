const app = new Vue({
    el: "#app",
    data: {
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
    },
    methods: {
        getPrice: function (value) {
            return '¥' + Number(value).toFixed(2);
        },
        remove: function (index) {
            this.books.splice(index, 1);
        },
        add: function (index) {
            this.books[index].count++;
        },
        sub: function (index) {
            if (this.books[index].count > 1) {
                this.books[index].count--;
            }
        },
        getAmountSum: function () {
            let sum = 0;
            for (let book of this.books) {
                sum += book.price * book.count;
            }
            return sum;
        }
    },
    // 过滤器，复数加s，加s，加s，可设置多个过滤器
    filters: {
        formatPrice: function (price) {
            return Number(price).toFixed(2)
        }
    }
})