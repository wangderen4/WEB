/*
1. 什么是网络
网络 network 计算机网络
    它是指处于不听地理位置的多台具有多台独立功能的计算机通过
    通信设备和通信介质互连起来
    冰鞋用以功能完善的网络 软件进行还礼 实现网络资源共享和信息传递的系统

    IP： 计算机的地址 在网络中的地址 通过 IP 来访问和定位计算机的物理位置

    局域网：内网 就是在同一IP段底下的网络

    广域网： 外网

    客户端、服务器

    请求 、响应

    客户端一般情况下是用户 用于交互 只要是移动端和pc端
        C/S B/S C与B 都是客户端 C = client  B = Brower

        服务器 Service 它是指一个管理资源并为用户提供服务的计算机软件

        稳定性 安全性 性能
2. 什么是HTML
3. 什么是HTTP
4. HTTP是用来自做什么的
5. 什么是URL
6. HTTP的请求与响应是什么
*/
/*
nodejs 自带一个模块 HTTP模块 专门用来处理HTTP
 */
const http = require('http');
var createServer2 = http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    })
    response.write('欢迎访问wangderen4的服务器')
    response.write('<h1>今天是1月15日</h1>')
    response.end('finished!!!')
})

createServer2.listen(8090)
console.log('Server port:8090')