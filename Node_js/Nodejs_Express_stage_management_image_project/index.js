const Express = require('express')
const Fs = require('fs')
const Multer = require('multer')
const Path = require('path')
const bodyParse = require('body-parser')

// 1.实例化一个Express() 对象
const app = Express()
console.log('实例化一个Express() 对象已完成')

// 2.使用对象方法，把需要向用户开放的文件夹开放出去

    // 2.1 开放服务器中public，其主要存放一些网页
app.use(Express.static(Path.join(__dirname,'public')))
console.log('开放服务器中public，其主要存放一些网页已完成')
    // 2.2 开放服务器中的images_db，存放用户上传的图片
app.use(Express.static(Path.join(__dirname,'images_db')))
console.log('开放服务器中的images_db，存放用户上传的图片')
    // 数据JSON类型
app.use(bodyParse.json())
   // 2.3 解析POST 请求
app.use(bodyParse.urlencoded({extended:false}))
console.log('解析POST 请求已成功')

// 3.用户登录
app.post('/login',(req,res)=>{
    // 获取用户登陆的信息 包括用户的账号与密码
    let get_body = req.body
    // 同步读取 txt文件中的信息
    console.log('获取用户登陆的信息 包括用户的账号与密码已完成')
    console.log(req.body)
    console.log('用户名' + req.body.uname)
    console.log('密码' + req.body.upasswd)
    Fs.readFile('./user_info.txt',(err,data)=>{
        //判断是否有文件，如果有错则在终端输出错误信息~
        if(err) {
            return console.error('出现一个dfghjkldhgsav这样的错误！');
        }
        console.log( '123'+data.toString())
        console.log('读取文件已完成')
        var user_info = JSON.parse(data);
        console.log(user_info)
        console.log(user_info.length)
        for (let i = 0; i < user_info.length;i++) {
            if(get_body.uname == user_info[i].uname) {
                console.log('用户名匹配成功')
                if (get_body.upasswd == user_info[i].upasswd) {
                    console.log('密码匹配成功')
                    res.redirect('/HTML/homePage.html')
                }else{
                    res.send('密码匹配失败')
                }
            }else{
                res.send('用户名不存在')
            }
        }
    })
    

})

// 4.用户注册
app.post('/register',(req,res)=>{
    // 获取用户注册的信息 包括用户的账号与密码
    let get_body = req.body
    // 同步读取 txt文件中的信息
    console.log('1.获取用户注册的信息 包括用户的账号与密码已完成')
    console.log(req.body)
    console.log('2.要注册的用户名是' + req.body.uname)
    console.log('3.要注册的密码是' + req.body.upasswd)
    Fs.readFile('./user_info.txt',(err,data)=>{
        //判断是否有文件，如果有错则在终端输出错误信息~
        if(err) {
            return console.error('出现一个这样的错误！');
        }
        console.log('4.读取文件已完成')
        var user_info = JSON.parse(data);
        // console.log(user_info)
        console.log( '5.用户信息的个数' +user_info.length)
        for (let i = 0; i < user_info.length;i++) {
            if(get_body.uname == user_info[i].uname) {
                res.send('用户名已存在')
            }else{
                user_info.push(get_body)
                user_info = JSON.stringify(user_info)
                Fs.writeFile('./user_info.txt',user_info,(err,data)=>{
                    if (err) {
                        console.error(err)
                    }
                    console.log(typeof data,data)
                })
            }
        }
    })
    

})

app.listen(10086,()=>{
   console.log("Server is running port is 10086")
})