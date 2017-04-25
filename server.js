var express = require('express');
var react = require('react');
var app = express();

app.use('/', express.static('./'));

//the server bit
app.listen(8888, function() {
	console.log('app listening on port: 8888')
})


