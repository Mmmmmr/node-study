var express = require('express')
var fs = require('fs')
var Students = require('./students')

var router = express.Router()

router.get('/students', function(req, res){
    Students.find(function(err, students){
        if (err) {
            return res.status(500).send('server error')
        }
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
    res.render('new.html')
})

router.post('/students/new', function(req, res){
    console.log(req.body)
    Students.save(req.body, function(err) {
        if (err) {
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})

router.get('/students/delete', function(req, res) {
    Students.delete(req.query.id, function(err) {
        console.log(req.query.id)
        if(err){
            return res.status(500).send('server error')
        }
        res.redirect('/students')
    })
})



router.get('/students/edit', function(req, res){
    Students.findById(req.query.id, function(err, data){
        if(err){
            return res.status(500).send('server error')
        }
        res.render('./edit.html',{
            students: data
        })
    })
})

router.post('/students/edit', function(req,res){
    console.log(req.body)
    Students.edit(req.body, function(err){
        if(err){
            return res.status(500).send('server error')
        }
    })
    res.redirect('/students')
})
module.exports = router