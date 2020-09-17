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
        add: function (index) {
            this.books[index].count++;
        },
        sub: function (index) {
            if (this.books[index].count > 1) {
                this.books[index].count--;
            }
        },
        remove: function (index) {
            console.log("index = " + index)
            this.books.splice(index, 1)
            console.log(this.books)
        },
        // 截取当前数据到小数点后两位
        numFilter: function (value) {
            const realVal = parseFloat(value).toFixed(2);
            return '¥' + realVal;
        },
        getAmount: function () {
            let amount = 0
            for (let book of this.books) {
                amount += book.price
            }
            return amount;
        }
    },
})