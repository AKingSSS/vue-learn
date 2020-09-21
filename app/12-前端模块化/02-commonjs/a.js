function sum(num1, num2) {
    return num1 + num2;
}

let flag = true;
if (flag) {
    console.log(sum(10, 20))
}

// commonjs 导出
module.exports = {
    flag: flag,
    sum: sum
}
