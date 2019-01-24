const Express = require('express')

const bodyParser = require('body-parser')

const path = require('path')

//文件上传的第一步 导入 第三方模块 multer
const multer =require('multer')
/**
 * 它适用于 构建预处理文件上传的 中间件
 * 作用是用来获取上传的内容，对文件进行存储操作 方便服务器对文件操作
 */

const app = Express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(Express.static(path.join(__dirname,'public')))
app.use(Express.static(path.join(__dirname,'resources')))

// 第二步 配置 存储属性
const storage = multer.diskStorage({
    // 设置存储文件的位置
    destination:(req,file,cb)=>{
        cb(null,path.resolve('resources/pictures'))
    },
    // 重命名~就是重新设置文件的名字~
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))//originalname 后缀名
    }
    
})


// 第三部将配置好的属性应用到服务中
const upload = multer({storage:storage})

// 指定POST 请求的上传属性 也就是说上传功能应用到应用到那个应用请求



app.post('/upload',upload.single('files'),(req,res)=>{
    console.log(req.body)

    res.send('上传成功了!!!')
})

app.listen(9000)
