var express 		= require('express');
var bodyParser 		= require('body-parser');
var _ 				= require('underscore');

var app 			= express();
var PORT 			= process.env.PORT || 3000;
var todos 			= [];
var todoNextId 		= 1;

app.use(bodyParser.json());		// middleware;

app.get('/', function(req, res){
	res.send('Hello World! Welcome to API - DB');
});

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + '!');
});