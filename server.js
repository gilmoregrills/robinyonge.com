var express = require('express');
var path = require('path');
var react = require('react');
var app = express();


const PORT = 8000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'))
});

app.listen(PORT, HOST, function() {
	console.log('app listening on port: ' + HOST + ':' + PORT)
})


