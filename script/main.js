(function() {
	window.App = {
		Task: {},

		template: function(id) {
			return _.template($('#' + id).html());
		},

		display: function(data) {
			$('title').html(data.title);
			$('.content').html(data.content);
		}
	}
})();