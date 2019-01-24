/*
GET 方法


在开发中，很多场景中都需要和用户的浏览器打交道，比如 表单提交
表单提交一般只有两种方式 GET/POST
如何获取 GET 请求内容
因为 GET 请求内容直接被嵌入在路径中
URL 是完整的球球路径，包含了 ？ 后面的部分
服务器需要手动解析后面的内容方能拿到 GET 的参数

Nodejs 中使用 url 模块中的 parse 来解析
*/

const http = require('http')
const url = require('url')

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    })

    let gets = url.parse(req.url)
    console.log(gets.query) 

    res.end()
}).listen(9000)