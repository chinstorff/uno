var app = app || {};

(function ($) {
    app.AppView = Backbone.View.extend({
	el: '.content',
	events: {
	    'click .reset': 'resetAll',
	    'click #add-player': 'createOnEnter',
	    'keypress #player-name': 'createOnEnter',
	    'click .destroy': 'clearAll',
	},
	initialize: function () {
	    this.$input = this.$('#player-name');
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
		player.set('score', 0);
	    });
	},
	createOnEnter: function (event) {
	    if (event.which === ENTER_KEY || event.type === 'click') {
		console.log('create player event');
		var p = new app.Player ({
		    name: this.$input.val().trim(),
		    score: 0,
		    id: app.Players.length,
		});
		app.Players.add(p);
		this.$input.val('').focus();
	    }
	},
	clearAll: function () {
	    _.invoke(app.Players.toArray(), 'destroy');
	}
    })
})($ );
