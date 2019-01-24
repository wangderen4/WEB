const Express = require('express')
const path = require('path')


const app = Express()
app.use(Express.static(path.join(__dirname,'public')))
app.use(Express.static(path.join(__dirname,'resources')))

// 1.登录的接口 API
// /login GET uname upasswd


var user_info = {
    uname:'Jack Ma',
    upasswd:'123456'
}

app.get('/register',(req,res)=>{
    let get_query =req.query
    // 判断用户是否存在
    if (get_query.uname === user_info.uname) {
        let msg = {
            msg:'用户名已存在',
            err:true
        }
        res.send(JSON.stringify(msg.msg))
    }else{
        let msg = {
            msg:'',
            err:false
        }
       
        user_info = {
            uname:get_query.uname,
            upasswd:get_query.upasswd
        }
        res.send(JSON.stringify(user_info))
    }
})

app.get('/login',(req,res)=>{
    //req 用来处理请求的数据  
    //res 用来处理响应的数据
    //request 对象 表示http 对象的请求，包括请求的字符串，参数
    // 内容、HTTP头部的属性
    // 常见的属性有：
    let app = req.app//表示综合请求对象
    let baseUrl = req.baseUrl//表示获取路由就是当前请求的路由的URL路径
    let body = req.body // GET有效 POST无效、请求体
    let hostname = req.hostname // 获取主机名与端口
    let masterip = req.ip // 获取IP
    let orginalURL = req.originalUrl //获取原始请求
    let parms = req.parms //获取路由的参数
    let query = req.query // 获取URL参数列表
    let router = req.router //获取当前路由
    //let header = req.get() //获取指定的HTTP请求

    // res.send(`baseurl${baseUrl}
    // hostname${hostname}
    // ip${masterip}
    // oURL${orginalURL}
    // parms${parms}
    // query${query}
    // router${router}
    // `)

    let get_query =req.query
    // 判断用户是否存在
    if (get_query.uname ===user_info.uname) {
        let msg = {
            msg:'',
            err:false
        }
        //判断密码是否存在
        if (get_query.upasswd ===user_info.upasswd) {
            msg['msg'] = '登录成功'
            msg['err'] = false
            res.send(JSON.stringify(msg.msg))
        }else{
            msg['msg'] = '密码错误'
            msg['err'] = true
            res.send(JSON.stringify(msg.msg))
        }
    }else{
        let msg = {
            msg:'账号不存在',
            err:true
        }
        res.send(JSON.stringify(msg))
    }

})
app.listen(9999)