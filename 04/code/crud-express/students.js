//用于对students数据进行操作
var fs = require('fs')
var dbPath = './db.json'

//查询所有的
exports.find = function(callback){
    fs.readFile(dbPath, function(err, data){
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data.toString())
        return callback(null, students)
    })
}

//添加student
exports.save = function(student, callback){
    fs.readFile(dbPath, function(err, data) {
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data.toString())
        student.id = students[students.length - 1].id + 1
        students.push(student)
        var fileData = JSON.stringify(students)

        fs.writeFile(dbPath,fileDate, function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}

exports.findById = function(id, callback){
    fs.readFile(dbPath, function(err, data){
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data.toString()).students
        
        var ret = students.find(function(item){
            return item.id === parseInt(id)
        })
        callback(null, ret)

    })
}

exports.delete = function( id, callback) {
    fs.readFile(dbPath, function(err, data){
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data.toString()).students
        var deleteId = students.findIndex(function(item){
            return item.id === parseInt(id)
        })

        students.splice(deleteId, 1)
        var fileData = JSON.stringify({
            students: students
        })
        
        fs.writeFile(dbPath, fileData, function(err){
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    })
}

exports.edit = function(student,callback){
    fs.readFile(dbPath, function(err, data) {
        if(err){
            return callback(err)
        }
        var students = JSON.parse(data.toString()).students
        student.id = parseInt(student.id)
        var stu = students.find(function(item){
            return item.id === student.id
        })
        for(var key in stu){
            stu[key] = student[key]
        }
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath,fileData, function(err){
            if(err){
                return callback(err)
            }
            callback(null)
        })
    })
}



