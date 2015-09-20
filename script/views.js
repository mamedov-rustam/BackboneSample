(function() {
	App.Task.View = Backbone.View.extend({
		tagName: 'div',

		className: 'col-md-6 col-md-offset-3',

		template: App.template('task-template'),

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	App.Task.CollectionView = Backbone.View.extend({
		tagName: 'div',

		className: 'col-md-6 col-md-offset-3',

		template: App.template('task-collection-template'),

		initialize: function() {
			this.collection.on('remove', this.render, this);
		},

		render: function() {
			this.$el.html(this.template(this.collection.toJSON()));
			return this;
		}
	});

	App.Task.AddFormView = Backbone.View.extend({
		tagName: 'div',

		className: 'col-md-4 col-md-offset-4',

		template: App.template('add-task-form-template'),

		render: function() {
			this.$el.html(this.template());
			return this;
		},

		events: {
			'submit': 'submit'
		},

		submit: function(e) {
			e.preventDefault();

			var model = new App.Task.Model();
			model.set('title', this.$el.find('input[name=title]').val());
			model.set('content', this.$el.find('textarea[name=content]').val());
			model.set('date', this.$el.find('input[name=date]').val());

			App.Task.tasks.add(model);

			App.Task.Router.instance.navigate('tasks', {trigger: true});
		}
	});

	App.Task.EditFormView = Backbone.View.extend({
		tagName: 'div',

		className: 'col-md-4 col-md-offset-4',

		template: App.template('edit-form-template'),

		events: {
			'submit': 'submit'
		},

		submit: function(e) {
			e.preventDefault();
			var title = this.$el.find('input[name=title]')[0].value;
			var content = this.$el.find('textarea[name=content]')[0].value;
			var date = this.$el.find('input[name=date]')[0].value;
			var index = this.$el.find('form').attr('id');
			var model = App.Task.tasks.at(index);
			model.set('title', title);
			model.set('content', content);
			model.set('date', date);

			App.Task.Router.instance.navigate('tasks', {trigger: true});
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

})();