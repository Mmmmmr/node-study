var http = require('http')
var fs = require('fs')
var template = require('art-template')
var parseUrl = require('url')

var comments = [
  {
    name: '张三',
    message: '今天天气真好',
    dateTime: '2019-3-7'
  },
  {
    name: '张三1',
    message: '今天天气真好',
    dateTime: '2019-3-7'
  },
  {
    name: '张三2',
    message: '今天天气真好',
    dateTime: '2019-3-7'
  },
  {
    name: '张三3',
    message: '今天天气真好',
    dateTime: '2019-3-7'
  }
  
]

http.createServer(function (req, res) {
        var url = parseUrl.parse(req.url, true)
        var pathname = url.pathname
        
        
        if (pathname === '/') {
            fs.readFile('./views/index.html', function (err, data) {
                if (err) {
                    return res.end('404 Not Found')
                }
               var dataStr =  template.render(data.toString(), {
                comments
               })
                res.end(dataStr)
            })
        } else if (pathname === '/pinglun') {
          console.log(url.query)
          comment = url.query
          comment.dataTime = '2019-3-7 13.20'
          comments.unshift(comment)
          res.statusCode = 302
          res.setHeader('Location','/')
          res.end()
        }else if (pathname === ('/post')){
          fs.readFile('./views/post.html', function (err, data) {
            if (err) {
              return res.end('404 Not Found')
            }
            res.end(data)
          })
        }else if (pathname.indexOf('/public/') === 0) {
         fs.readFile('.' + req.url, function (err, data) {
          if (err) {
            res.end('404 Not Found')
          }
          console.log('.' + req.url)
          res.end(data)
        }) 
      } else {
        fs.readFile('./views/404.html', function (err, data) {
          if (err) {
            res.end('404 Not Found')
          }
          res.end(data)
        })
      }
    })
    .listen(3000, function(){
        console.log('服务器已启动......')
    })