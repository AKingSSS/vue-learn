function sum(num1, num2) {
    return num1 + num2;
}

let flag = true;
if (flag) {
    console.log(sum(10, 20))
}

//es6 导出方式一
export {
    flag, sum
}

// 导出方式 二
export let width = 3.58;
export let height = 3.13;

// 导出函数/类
export function num1(num1, num2) {
    return num1 + num2;
}