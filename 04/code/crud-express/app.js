var express = require('express')
var fs = require('fs')

var app = express()


app.use('/public/', express.static('./public'))
app.use('/node_moudules/', express.static('./node_moudules'))
app.engine('html', require('express-art-template'))


app.get('/', function(req, res){
    fs.readFile('db.json', function(err, data){
        if(err) {
            return res.status(500).send('server error')
        }
        var db = JSON.parse(data.toString())
        console.log(db)
        res.render('index.html', {
            fruit: [
                {name: '苹果'},
                {name: '香蕉'},
                {name: '梨子'},
                {name: '西瓜'}
            ],
            student: db.students
        })
    })
    
})

app.listen(3000, function() {
    console.log('running')
})