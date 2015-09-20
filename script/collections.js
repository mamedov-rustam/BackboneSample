(function() {
	App.Task.Collection = Backbone.Collection.extend({
		model: App.Task.Model
	});
})();