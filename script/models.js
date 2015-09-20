(function() {
	App.Task.Model = Backbone.Model.extend({
		defaults: function() {
			this.title = 'Task-title';
			this.content = 'Task-content';
			this.date = 'Task-date';
		},

		validate: function(attrs) {
			// Validate for 'title'
			if(!attrs.title){
				return 'Title is required.'
			}

			var titleLength = attrs.title.trim().length;
			if(titleLength < 5 || titleLength > 30) {
				return 'Title length shoud be from 5 to 30 characters.'
			}

			// Validate for 'content'
			if(!attrs.content){
				return 'Content is required.'
			}

			var contentLength = attrs.content.trim().length;
			if(contentLength < 10 || contentLength > 1024) {
				return 'Content length shoud be from 10 to 1024 characters.'
			}

			// Validate for 'date'
			if(!attrs.date){
				return 'Date is required.'
			}

			var now = new Date().getTime();
			var taskDate = new Date(attrs.date).getTime();
			if(now > taskDate) {
				return 'Task date can\'t be past or today.'
			}

		}
	}, {
		copy: function(src, dest) {
			dest.set('title', src.get('title'));
			dest.set('content', src.get('content'));
			dest.set('date', src.get('date'));
		}
	});
})();