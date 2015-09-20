(function() {
	App.Task.Model = Backbone.Model.extend({
		defaults: function() {
			this.title = 'Task-title';
			this.content = 'Task-content';
			this.date = 'Task-date';
		}
	});
})();