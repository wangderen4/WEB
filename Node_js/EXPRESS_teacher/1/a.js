const cb = require('./2/b')

function sayHi(msg) {
    console.log(msg);
}

function sayHi2(msg) {
    console.log(msg);
}


cb.callBack(sayHi,'我是第一个字符串~，我应该会被第一个打印出来~');
cb.callBack(sayHi2,'我是一个字符串~，我是第二个函数，应该会被第二个打印出来~');
// b.js 函数调用
// callBack()


// sum 求和
// return 结果 返回函数点用的位置 同步处理结果 立刻返回的那种 
//callBack  用于处理不能确定 结果和时间的时效性 不立刻 耗时
// 效率低 callBack 一般情况下使用在异步处理中

var obj = {
    
}
obj.sum = function (a,b) {
    let sum = a+b
    return sum
}
module.exports = obj