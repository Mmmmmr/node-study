var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
        if (req.url === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found')
                }
                res.end(data)
            })
        } else if (req.url.indexOf('/public/') === 0) {
         fs.readFile('.' + req.url, function (err, data) {
          if (err) {
            res.end('404 Not Found')
          }
          console.log('.' + req.url)
          res.end(data)
        })
      }
    })
    .listen(3000, function(){
        console.log('服务器已启动......')
    })