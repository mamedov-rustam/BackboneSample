(function() { 
	App.Task.Router = Backbone.Router.extend({
		routes: {
			'':      	        'home',
			'home':      	    'home',
			'more':             'more',
			'tasks':     	    'showAll',
			'task/add': 	    'add',
			'task/edit/:id':    'edit',
			'task/delete/:id':  'delete',
			'task/view/:index': 'show',
		},

		home: function() {
			App.display({
				title: 'Home',
				content: $('#home-template').html(),
			});
		},

		more: function() {
			App.display({
				title: 'Learn more',
				content: $('#more-template').html(),
			});
		},

		showAll: function() {
			App.display({
				title: 'Tasks',
				content: App.Task.tasksView.render().el
			});
		},

		show: function(index) {
			var task = App.Task.tasks.at(index);
			var taskView = new App.Task.View({model: task});
			App.display({
				title: task.get('title'),
				content: taskView.render().el
			});
		},

		add: function() {
			var addTaskFormView = new App.Task.AddFormView();
			App.display({
				title: 'Add new task',
				content: addTaskFormView.render().el
			});
		},

		edit: function(index) {
			var editFormView = new App.Task.EditFormView({
				model : App.Task.tasks.at(index)
			});
			App.display({
				title: 'Edit task',
				content: editFormView.render().el
			});
		},

		delete: function(index) {
			var model = App.Task.tasks.at(index);
			App.Task.tasks.remove(model);
			this.navigate('tasks');
		}
	});

	App.Task.Router.instance = new App.Task.Router();
	Backbone.history.start();
})();