;(function () {
    // 使用 a 中的flag
    if (moduleA.flag) {
        console.log("hello！ Python 大星")
    }
    // 使用 a 中的 sum
    const sum = moduleA.sum(8888, 6666);
    console.log(sum)
})()