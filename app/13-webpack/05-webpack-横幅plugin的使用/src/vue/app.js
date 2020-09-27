export default {
    template: `
    <div>
    <h2>{{message}}</h2>
    <button @click="btnClick">点我</button>
    </div>
    `,
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