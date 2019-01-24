/*
 * 服务器应用程序 提供了 WEB 应用服务
 * 作用是为了客户端访问提供数据服务~
 */

 // 1.引入 http 服务模块
 const http = require('http')
 // 2.引入url 模块 对 URL 进行解析
 const url = require('url')
 // 3.初始化 应用服务~
 let server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html;charset=utf-8'
    })
    // home about login register
    // 5.获取 请求中的url 的path 目录
    let pathname = url.parse(req.url).pathname
    
    // 6.路径处理 (路由 route)~
    showPage(pathname,res)
    res.end()
 })

 // 4.启动应用服务  //老师另外讲的SSH FTP
 server.listen(9001)

 //7.实现对路径的处理 (数据的处理)
 function showPage(pn,res) {
     switch (pn) {
         case '/favicon.ico':
            break;
         case '/home/':
            res.write('<h1>首页</h1>')
            break;
         case '/about/':
            res.write('<h1>关于</h1>')
            break;
         case '/login/':
            let html_content = `
            <h1>欢迎登录</h1>
            <form action='/register/'>
                <input type='text' name='uname'>
                <input type='submit' value='注册'>
            </form>
            `
            res.write(html_content)
            break;
         case '/register/':
         
            // res.write('注册')
            // 写 JOSN 数据
            //1.键值对 2.最外层 3.值的类型：6中
                let json_data = {
                    uname:'Tom',
                    uage:18,
                    ufriends:[
                        'Jack','Rose','Lily'
                    ],
                    umarry:false,
                    uhouse:null,
                    ulike:{
                        like:'play',
                    },
                    usex:'man',
                }
                let json_string =JSON.stringify(json_data);
                res.write(json_string);
            break;
     
         default:
             res.write('<h1>404错误 网页找不到啦~~~</h1>')
             break;
     }
     
 }

 /**
  * 服务器端原理：
  *     使用nodejs作为后端的开发项目，客户访问过程：
  *         客户端发起请求nodejs服务器接收到请求并解析，运算---》
  *         返回结果多客户端完成响应
  */