var express = require('express')
var app = express()

//static files
app.use(express.static('public'))

//routing functions
app.get('/', function (request, response) {
	console.log('request received for "home" or "/"')
	response.send('Hello World!')
})

//the server bit
app.listen(8888, function() {
	console.log('app listening on port 8888')
})


