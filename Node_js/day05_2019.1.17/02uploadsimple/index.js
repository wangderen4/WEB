/**图片长传是WEB开发中常用的功能
 * 使用的是第三方模块 multer 来实现
 * 
 */

 const Express = require('express')

 const Multer = require('multer')
 const Path = require('path')

 const app = Express()

 app.use(Express.static(Path.join(__dirname,'public')))
 app.use(Express.static(Path.join(__dirname,'resources')))
//最简单的方式来使用 multer 
// 首先来设置图片的存储目录
let uploadPath = Path.join(__dirname,'resources/pictures/')
// 创建multer 存储文件对象
// 设置存储路径使用了 multer 的参数 destiny的值来定义自定义目录
const uploadDir = Multer({dest:uploadPath})

// 单张上传   single(bame) 表示单张照片的上传
// 其中name 是要很传递表示保持一致 目的是为了能确保 在传递照片时 键值对的对应
// 此name表示有前端页面中的表单指定
let single_file = uploadDir.single('logo')

//需要在指定的post处理中设置相应的上传属性 singe_file
 app.post('/upload',single_file,(req,res)=>{
    console.log(req.file)
    /**file 属性就是图片上传对应的图片
     * fileldname: Fileld name 有表单指定
     * originalname :用户计算机上的文件名称
     * encoding: 文件编码
     * mimetype: 文件的类型
     * size:文件的大小(字节单位)
     * destination:保存的路径
     * filename:保存在destination 中的文件名
     * path:已上传的完整路径
     * buffer: 一个存放了整个文件的Buffer
     */
    res.send('上传成功!!!')
 })

 // 指定路径存储 和指定文件名称
 // 判断有没有要存储的目录？？？


 //要先配置 要存储的目录和名称
 let st  = Multer.diskStorage({
    destination:uploadPath,
    filename:(req,file,cb)=>{
        cb(null,'1.jpg')
    }
 })
 let Multer2 = Multer({storage:st})
 let single_2 = Multer2.single('logo')

 app.post('/upload2',single_2,(req,res)=>{
     res.send(req.file.path)
 })

 /**
  * 上传多张图片
  * 1.
  * 
  */
let st2 = Multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(file)
        cb(null,Path.join(__dirname,'resources/pictures/'))
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
let multer3 = Multer({storage:st2})
// let files = multer3.array('logos',3)
let files = multer3.fields([
    {name:'logo',maxCount:1},
    {name:'logos',maxCount:3}]
    )

app.post('/uploads',files,(req,res)=>{
    res.send(req.files)
})


app.listen(9001)