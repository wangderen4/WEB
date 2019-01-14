function sayHi(msg) {
    console.log(msg)
}


function sayBye(msg) {
    console.log(msg)
}

function callBackFn(fn,msg) {
    fn(msg)
}

callBackFn(sayHi,'hello')
//会掉的典型方式： 试将函数名作为参数进行传递 在需要的时候调用

