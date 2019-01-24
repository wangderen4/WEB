function callBack(fn,msg) {
    fn(msg)
}
module.exports = {
    callBack : callBack,
}

var obj = {}
obj.sum = function (a,b,callback) {
    let sum = a+b
    callback(null,sum)
}
module.exports = obj