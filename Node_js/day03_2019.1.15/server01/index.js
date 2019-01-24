/*
Express 是Node.js 中的一个 WEB 框架
提供丰富的 WEB 应用服务

使用步骤：
    1.初始化nodejs项目 npm init
    2.安装express 包/模块 cnpm install express --save
      或者 cnpm i express --s
    3.在项目的主入口 js文件中 引入express模块
      const express = require('express')
    4.初始化 express 对象
      const app = express()

*/
const express = require('express')
// 引入nodejs内置的path
const path = require('path')

const bodyParse = require('body-parser')

const app = express()
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParse.urlencoded({extended:false}))

// 5.使用get方法处理 GET 请求
/*
路由：是指对浏览器地址的一种解析，通过这种解析的路径可以实现不同（数据）模块，从而
    实现不同的页面和功能，这个路径称之为路由
    get('路由',callback)
*/
app.get('/',(req,res)=>{
    res.send('Hello World!!!')
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send('<h1>Post 成功</h1>')
})

app.get('/home',(req,res)=>{
    console.log(req.query)
    res.send('home')
})

app.listen(9001,()=>{
    console.log("Server is running port is 9001")
})