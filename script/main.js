(function() {
	window.App = {
		Task: {},

		template: function(id) {
			return _.template($('#' + id).html());
		},

		display: function(data) {
			$('title').html(data.title);
			$('.content').html(data.content);
		},

		displayError: function(model, viewContext) {
			var show = function() {
				var errorElement = this.$el.find('div.alert-danger');
				if(!errorElement.length) {
					var template = App.template('error-template');
					var errorBlock = template({errorMessage: model.validationError});
					this.$el.prepend(errorBlock);
					errorElement = this.$el.find('div.alert-danger');
				} else {
					errorElement.find('#error-msg').html(model.validationError);
				}
			}
			show.apply(viewContext);
		}
	}
})();