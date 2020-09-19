const app = new Vue({
    el: "#app",
    data: {
        notes: ['吃饭', '睡觉', '打豆豆'],
        task: '背单词'
    },
    methods: {
        remove: function (index) {
            this.notes.splice(index, 1);
        },
        clear: function () {
            this.notes = [];
        },
        enter: function (event) {
            // this.notes.push(event.target.value);
            // v-model 双向绑定
            this.notes.push(this.task)
        }
    }
})