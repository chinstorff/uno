var app = app || {};

(function ($) {
	app.Player = Backbone.Model.extend({
		defaults: {
			name: '',
			score: 0
		},
	});
})();