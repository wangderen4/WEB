const Express = require('express')
const BodyParse = require('body-parser')
const Path = require('path')

let app = Express()
app.use(Express.static(Path.join(__dirname,'public')))

app.use(BodyParse.urlencoded({extended:false}))
app.use(BodyParse.json())


app.get('/',(req,res)=>{
    // res.redirect('https://www.baidu.com')
    res.redirect('login.html')
    // res.redirect(200,'login.html')
    // res.send('')
})

var users = {
    info:[
        {name:'Tom',pw:'123456'},
        // {name:'Jack',pw:'123456'}
    ]
}

app.post('/login',(req,res)=>{
    // 对用户名和密码进行 验证 安全等级
    // 加密之后的数据
    // 密码不正确
    if (req.body.uname == users.info[0].name) {
        if(req.body.upasswd != users.info[0].pw) {
            //密码不正确
            // 局部刷新
            // res.send('密码错误!!!')
            let msg = {
                msg:'登陆失败!!!',
                err:true
            }
            res.send(JSON.stringify(msg))
        }else{
            // 如果密码正确 要进行跳转/重定向 home主页面
            // res.redirect('home.html')
            let msg = {
                msg:'登陆成功!!!',
                err:false
            }
            res.send(JSON.stringify(msg))
        }
    }else{
        // res.send('用户名不存在/错误')
        let msg = {
            msg:'用户名不存在/错误',
            err:true
        }
        res.send(JSON.stringify(msg))
    }
    // 如果密码正确 要进行跳转/ 中丁乡 home主页面
    // res.redirect('home.html')
    
})
app.get('/register',(req,res)=>{
    res.redirect('register.html')
})
app.listen(10000)