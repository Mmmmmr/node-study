var fs = require('fs')

fs.readdir('C:/Users/jianglimin/Desktop/www', function(err, file){
    console.log(file)
    var content = ''
    file.forEach(function (item) {
        content += item 
        console.log(content)
    })
})