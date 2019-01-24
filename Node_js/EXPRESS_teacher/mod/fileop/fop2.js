/**
 封装文件操作模块 
*/
const fs = require('fs')
// 是否是文件
const path = require('path')
//拼接全路径
function full_path(fp) {
	return path.join(process.cwd(),fp)
}



function is_file(fp,cb) {
	// 2.异步判断
	fs.exists(fp,function (exists) {
		// exists 的状态如果是true 表示是文件
		cb(exists)
	})
}

function f_read(fp,cb) {
	// 1.判断是否是文件
	is_file(fp,function (res) {
		if (res) {
			// 3.读取文件内容
			fs.readFile(fp,(err,data)=>{
				if(err) throw err
				cb(null,data.toString())
			})
		}else{
			console.log('文件不存在!!!')
		}
	})
}


// 写文件
function f_write(fp,info,cb) {
	console.log(fp)
	fp = full_path(fp)
	console.log(fp)
    
	is_file(fp,(res)=>{
		if (res) {
			fs.readFile(fp,(err,data)=>{
				if (err) {
					throw err
				}
				let obj = data.toString()
				// obj = JSON
				if (obj !='' || obj != null) {
					obj = JSON.parse(obj)
					if(obj.hasOwnProperty('users')) {
						obj.users.push(info)
					}else{
						obj['users'] = []
						obj['users'].push(info)
					}
					obj = JSON.stringify(obj)
					fs.writeFile(fp,obj,(err)=>{
						if (err) {
							throw err
						}
						cb(null,'写入成功!!!')
					})
				}else{
					console.log('没有内容')
                    
				}
			})
		}else{
			cb(res,'文件不存在!!!')
		}
	})
}


// 修改用户信息
// 1. 用户查找
// 2. 用户信息修改
// 3. 保存
function f_edit(fp,info,cb) {
	fp = full_path(fp)
	is_file(fp,(res)=>{
		if(res) {
			fs.readFile(fp,(err,data)=>{
				if (err) {
					throw err
				}
				let obj = data.toString()
				if (obj !='' || obj != null) {
					obj = JSON.parse(obj)
					if (obj.hasOwnProperty('users')) {
						for (let i = 0; i < obj['users'].length;i++) {
							if (info['uname'] == obj['users'][i]['uname']) {
								obj['users'][i]['uage'] = info['uage']
							}
						}
					}else{
						obj['users'] = []
						obj['users'].push(info)
					}
					obj = JSON.stringify(obj)
					fs.writeFile(fp,obj,(err)=>{
						if (err) {
							throw err
						}
						cb('修改成功~~~')
					})
				}else{
					cb(null,'文件中无内容~')
				}
			})
		}else{
			cb(res,'没有内容')
		}
	})
}

let info = {
	uname:'jimi',
	uage:100
}
// f_write('./users.json',info,(err,res)=>{
//     if (err) {
//         throw err
//     }
//     console.log(res);
    
// })

// let fp = './users.json'
// f_edit(fp,info,(err,res)=>{
//     if(err) throw err
//     console.log('res:' +res)
// })


// 读取用户s目录
// dp = dir path
// eg: sources/users/
function r_dir(dp,cb) {
	dp = full_path(dp)
	//判断目录是否存在
	fs.readdir(dp,(err,files)=>{
		if (err) {
			cb(false,null)
		}
		cb(null,files)
	})
}

/**
 * 创建用户目录
 * dp 用户目录： /sources/users/Tom
 * 图片目录：/ sources/users/Tom/创建目录的规则(采用的是时间)
 */
function f_mkdir(dp,cb) {
	dp = full_path(dp)
	//判断文件是否存在
	is_file(dp,(res)=>{
		if (!res) {
			fs.mkdir(dp,(err)=>{
				if (err) {
					cb(true,{
						msg:'文件创建失败',
						code:'6001'
					})
				}
				cb(false,{
					msg:'文件创建成功',
					code:'6001'
				})
			})
		}else{
			cb(false,{
				msg:'文件已存在',
				code:''
			})
		}
	})
	
}
// 开放接口
module.exports = {
	fread:f_read,
	fwrite:f_write,
	rfiles:r_dir,
	fmkdir:f_mkdir
}