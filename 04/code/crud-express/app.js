var express = require('express')
var fs = require('fs')
var router = require('./routers')
var bodyParser = require('body-parser')


var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/public/', express.static('./public'))
app.use('/node_moudules/', express.static('./node_moudules'))
app.engine('html', require('express-art-template'))


app.use(router)

app.listen(3000, function() {
    console.log('running')
})