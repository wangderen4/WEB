var http = require('http');
http.createServer(function (req,res) {
    res.write('<head><meta charset="utf-8"></head>')
    res.write('欢迎光临wangdere4的服务器')
    res.end('下次再见')
}).listen(8080);
console.log('http is running, port is 8080')