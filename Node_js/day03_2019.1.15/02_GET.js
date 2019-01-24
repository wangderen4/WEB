/*
处理 URL
URL模块 是用来处理客户端的请求 就是URL
主要是处理相关的请求与数据
*/
const http = require('http')
const url = require('url')

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    })
    // url.parse 用于解析 url中 path pathname href
    let req_url = url.parse(req.url)
    console.log(req_url.pathname)
    // res.write('服务器正在响应！！！')
    res.end()
}).listen(8090)

function showPage(pathname,res) {
    switch (pathname) {
        case '/favicon.ico':
            break;
        case '/home/':
            res.write('<h1 style="color:red">首页</h1>')
            break;
        case '/about':
            res.write('<h1>关于</h1>')
            break;
        default:
            break;
    }
}