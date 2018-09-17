var express = require('express');
var path = require('path');
var react = require('react');
var app = express();


app.use(express.static(path.join(__dirname + 'src')));

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname +'/prod/index.html'));
});

const port = process.env.PORT || 8000;

app.listen(port, function() {
	console.log('app listening on port: ' + port)
})
