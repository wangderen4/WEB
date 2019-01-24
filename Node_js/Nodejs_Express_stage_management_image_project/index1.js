const Fs = require('fs')
Fs.readFile('user_info.txt',(err,data)=>{
    if(err) {
        console.error(err)
    }
    let a = data.toString()
    a = JSON.parse(data)
    console.log(typeof a,a.length)
})
