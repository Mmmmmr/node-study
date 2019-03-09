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
        fs.writeFile(dbPath,students, function(err){
            if(err){
                return callback(err)
            }
        })
    })
}


