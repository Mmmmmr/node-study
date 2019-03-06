var http = require('http')

var fs = require('fs')

var server = http.createServer()

server.on('request', function(req, res){
    var url = req.url

    if(url === '/') {
        var indexFile = fs.readFile('../resource/index.html', function(err, data){
            if (err) {
                console.log(err)
                res.setHeader('content-type', 'text/plain; charset=utf-8')
                res.end('读取失败')
            } else{
                console.log(data)
                res.setHeader('content-type', 'text/html; charset=utf-8')
                res.end(data)
            }
        })
    }else if (url === '/jpg'){
        var jpgFile = fs.readFile('../resource/ab2.jpg', function(err, data){
            if (err) {
                console.log(err)
                res.setHeader('content-type', 'text/plain; charset=utf-8')
                res.end('读取失败')
            } else{
                console.log(data)
                res.setHeader('content-type', 'image/jpeg')
                res.end(data)
            }
        })
    }
    // if(url === '/'){
    //     console.log('/')
    //     res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    //     res.end('你好')
    // } else if (url === '/html'){
    //     console.log('/html')
    //     // res.setHeader('content-type', 'text/html; charset=utf-8')
    //     res.end('<p style="color: red">这是段落</p>')
    // }
})

server.listen(3000, function(){
    console.log('服务器开启了')
})