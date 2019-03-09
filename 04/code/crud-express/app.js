var express = require('express')
var fs = require('fs')
var router = require('./routers')


var app = express()


app.use('/public/', express.static('./public'))
app.use('/node_moudules/', express.static('./node_moudules'))
app.engine('html', require('express-art-template'))


app.use(router)

app.listen(3000, function() {
    console.log('running')
})