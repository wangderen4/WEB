const Express = require('express')
const BodyParser = require('body-parser')
const Multer =require('multer')
const Path = require('path')

const app = new Express()

app.use(Express.static(Path.join(__dirname,'public')))
app.use(BodyParser.urlencoded({extended:false}))

let uploadDir = Path.join(__dirname,'images')
let multer = Multer({dest:uploadDir})

let single = multer.single('logo')

app.post('upload',single,(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(9999)
/**作业要求：
 *  存储用户的图片
 * 指定的用户，图片要存储到对应的目录下 目录的名称是用户名
 * 用户名使用的手机号作为用户名
 * 用户目录下 使用时间格式进行 目录分类 例如 20190117
 * 对应的时间上传的文件 存储到对应的时间目录下
 * 文件的名称使用好苗家文件后缀为新的文件名称 不能修改原有文件后缀
 * 
 * 
 */