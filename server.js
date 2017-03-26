var express = require('express')
var react = require('react')
var app = express()

//static files
app.use(express.static('public'))

//routing functions

//this first catchall function eventually might req a
//distinction between /app and /api perhaps
//anything to /app should return my react onepage
app.get('*', function (request, response) {
	console.log('request received for "home" or "/"')
	response.send('test')
})

//the server bit
app.listen(8888, function() {
	console.log('app listening on port: 8888')
})


