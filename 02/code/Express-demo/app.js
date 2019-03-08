var express = require('express')

var app = express()

app.get('/', function (req, res) {
    res.send('你好 express')
})
app.use(express.static('eee'))
app.use(express.static('fffff'))
app.use(express.static('./public'))
// app.use('/public', express.static('./public'))

app.listen(3000, function () {
    console.log('express开启')
})