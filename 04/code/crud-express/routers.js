var express = require('express')
var fs = require('fs')
var Students = require('./students')

var router = express.Router()

router.get('/', function(req, res){
    Students.find(function(err, students){
        if (err) {
            return res.status(500).send('server error')
        }
        console.log(students)
        res.render('index.html', {
            fruit: [
                {name: '苹果'},
                {name: '香蕉'},
                {name: '梨子'},
                {name: '西瓜'}
            ],
            students: students.students
        })
    })
})

router.get('/students/new', function(req, res){
    res.send('new')
})
module.exports = router