/**
 * 用于处理用户验证
*/
const fop = require('../fileop/fop2')
// eslint-disable-next-line no-unused-vars
const path = require('path')
//oauth() 验证
function oauth_user(user_info,cb) {
	//读取文件
	// fop.fread()
	// console.log(__dirname)
	// 获取当前 程序运行的根目录
	// console.log(process.cwd())
	// console.log(path.dirname(require.main.filename))
	// console.log(__filename)
	// console.log(require.main.filename)
	fop.fread('sources/users.json',function (err,data) {
		// 对 data 进行匹配 user_info
		if (err) {
			cb(err,null)
		}
		if ((typeof JSON.parse(data)) == (typeof JSON.parse('{}'))) {
			// 将要对数据进行过滤
			let obj = JSON.parse(data)
			if (obj.hasOwnProperty('users')) {
				let users = obj['users']
				let flag = false
				for (let i = 0; i < users.length; i++) {
					let item = users[i]
					if (item['uname'] == user_info['uname']) {
						// 找到用户
						// cb(null,true)
						flag = true
						break
					}
				}
				if (flag) {
					// 找到
					cb(null,true)
				}else{
					// 没找到
					cb(null,false)
				}
				// cb(null,flag)
                
			}else{
				cb(null,false)
			}
		}else{
			cb(null,null)
		}
	})
}

function oauth_add(user,cb) {
	fop.fwrite('sources/users.json',user,function (err2,msg) {
		if (err2) {
			cb(err,msg),
			throw msg2
		}
		// 创建一个目录
		fop.fmkdir('sources/users/' + user.dirname,(err,msg)=>{
			if (err) {
				cb(true,msg)
			}
			cb(false,msg)
		})
		// cb(null,msg)
	})
}

function get_user_files(user,cb) {
	fop.rfiles('sources/users/'+user.uname,function (err,files) {
		if (err) {
			cb(true,null)
		}
		cb(null,files)
	})
}




module.exports = {
	oauth : oauth_user ,
	add:oauth_add,
	files:get_user_files
}