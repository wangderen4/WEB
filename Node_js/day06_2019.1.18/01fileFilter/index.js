const Express = require('express')
const BodyParse = require('body-parser')
const Multer = require('multer')
const Path = require('path')

let app = Express()
app.use(Express.static(Path.join(__dirname,'public')))
app.use(Express.static(Path.join(__dirname,'images')))

app.use(BodyParse.urlencoded({extended:false}))
app.use(BodyParse.json())

// 指定存储目录
let st = Multer.diskStorage({
    destination:(req,file,cb)=>{
        console.log(file)
        cb(null,Path.join(__dirname,'images'))
    },
    filename:(req,file,cb)=>{
        console.log(file)
        cb(null,file.originalname)
    }
})

// 实现文件过滤
function fileFilter(req,file,cb) {
    //1.文件类型
    // file.mimetype 'images/jpeg'
    let fileType = file.mimetype.split('/')[1]
    if(fileType === 'jpg') {
        cb(null,true)
    }else{
        cb(null,false)
        cb(new Error("图片类型不匹配!!!"))
    }

}
let multer =Multer({storage:st,fileFilter:fileFilter})

let single = multer.single('logo')
app.post('/upload',single,(req,res)=>{
    console.log(req.file)
    res.send('上传成功!!!')
})

app.listen(9999)