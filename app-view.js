var app = app || {};

(function ($) {
	app.AppView = Backbone.View.extend({
		el: '#main',
		events: {
			'click .reset': 'resetAll',
			'keypress #name': 'createOnEnter',
			'click .destroy': 'clearAll'
		},
		initialize: function () {
			this.$input = this.$('#name');
			this.listenTo(app.Players, 'add', this.addOne);
			this.listenTo(app.Players, 'all', this.render);
		},
		render: function () {
			this.$('#main').show();
		},
		addOne: function (player) {
			var view = new app.PlayerView({ model: player });
			this.$('#player-list').append(view.render().el);
		},
		resetAll: function () {
			_(app.Players.models).each(function (player) {
				player.save({ score: 0 });
			});
		},
		createOnEnter: function (event) {
			if (event.which !== ENTER_KEY || !this.$input.val().trim()) {
				return;
			} else {
				app.Players.create({ 
					name: this.$input.val().trim(),
					score: 0
				});
				this.$input.val('');
			}
		},
		clearAll: function () {
			_.invoke(app.Players.toArray(), 'destroy');
		}
	})
})($ );