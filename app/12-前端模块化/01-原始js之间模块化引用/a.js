const moduleA = (function () {
    // 定义一个 obj 对象
    let obj = {}

    function sum(num1, num2) {
        return num1 + num2;
    }

    let flag = true;
    if (flag) {
        console.log(sum(10, 20))
    }

    // 给对象赋值
    obj.flag = flag;
    obj.sum = sum;
    // 返回对象
    return obj;
})();

