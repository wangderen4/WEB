//声明一个函数
function sum(a,b) {
    return a+b
}

var ret = sum(1,1)

//调用文件外的nodejs
//require() 引入/导入一个模块 js文件
var sayHi2 = require('./index.js')// require('./index')
sayHi2('hello node_js');

var says = require('./index01')
says.sBB('12221231213')
says.sH('333333333333333333333333')

