var express 		= require('express');
var bodyParser 		= require('body-parser');
var _ 				= require('underscore');

var app 			= express();
var PORT 			= process.env.PORT || 3000;
var todos 			= [{
		id: 1,
		description: 'Walk a dog',
		complete: true
	},
	{
		id: 2,
		description: 'Clean a room',
		complete: false
	}
];
var todoNextId 		= 1;

app.use(bodyParser.json());		// middleware;

app.get('/', function(req, res){
	res.send('Hello World! Welcome to API - DB');
});

app.get('/todos', function(req, res){
	res.json(todos);
});



app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT + '!');
});