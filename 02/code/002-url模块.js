var url = require('url')

var parseObj = url.parse('/pinglun?name=asdas&value=adsada', true)

console.log(parseObj)
console.log(parseObj.query.name)