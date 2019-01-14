/*
模块：是Node.js 中很重要的一个概念
为了能让Node.js 文件可以相互调用，Node.js提供了一个简单模块系统
模块就是Node.js应用程序的基本组成部分，文件和模块是一一对应的
也就是说一个js文件就是一个模块
*/

//Node.js 自身自带的模块 ( 系统级别，内置)
//fs = file system 文件系统
// 一般来说，对服务器的访问其实就是访问文件

// 如果相对文件进行操作 必须先引入文件系统
const fs = require('fs')

fs.open('./text.txt','r+',(err,fd)=>{
    if(err) {
        console.log('err',err);
        throw err;
    }
    console.log('打开成功...')
})

// 先读
fs.readFile('./text1.txt',(err,fd)=>{
    if (err) {
        throw err
    }
    console.log(fd.toString())
})