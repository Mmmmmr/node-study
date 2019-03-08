var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var comments = [
    {
        name: '张三',
        message: '很反感看见的付过款京东方',
        dataTime: '2019-3-8 15.20'
    }
]

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.engine('html', require('express-art-template'))
app.use('/public/', express.static('./public'))
app.get('/', function(req, res) {
   res.render('index.html', {
    comments
   })
})
app.get('/post', function(req, res){
    res.render('post.html')
})

app.post('/post', function(req,res){
    var commit = req.body
    console.log(commit)
    commit.dataTime = '2019年3月8日 15:41:52'
    comments.unshift(commit)
    res.redirect('/')
})

app.listen(3000, function(){
    console.log('running...')
})