var Sequelize 		= require('sequelize');
var sequelize 		= new Sequelize(undefined, undefined, undefined, {
		'dialect': 'sqlite',
		'storage': __dirname + '/basic-sqlite-database.sqlite'
});


var Todo 		= sequelize.define('todo', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 250]
		}
	},
	completed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
});


sequelize.sync({force: false}).then(function(){
	console.log('Everything is synced');

	Todo.findById(1).then(function(td){
		if(td){
			//console.log(td.toJSON());
		} else {
			//console.log('todo not found by id');
		}
	});

	Todo.findAll().then(function(tk){
		tk.forEach(function(ttkk){
			console.log(ttkk.toJSON());
		});
	})

	// Todo.create({
	// 	description: 'Walk a dog',
	// 	completed: false
	// }).then(function(todo){
	// 	return Todo.create({
	// 		description: 'Clean office'
	// 	});
	// 	console.log('Finished');
	// 	console.log(todo);
	// });
});
