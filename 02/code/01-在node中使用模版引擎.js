var template = require('art-template')
var fs = require('fs')

var tpl = ''

fs.readFile('./tpl.html', function(err, data){
    if (err) {
        console.log('文件不存在')
    }
    
    var result = template.render(data.toString(), {
        name: 'zeng',
        age: 15,
        hobby: [
            'War3',
            'apex',
            'DNF'
        ]
    })
    console.log(result)
})




