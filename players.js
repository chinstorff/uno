var app = app || {};

(function ($) {
	app.PlayerList = Backbone.Collection.extend({
		model: app.Player,
		url: '/Users/romain/Desktop/Stanford%20Internship/UNOCalculator/index.html'
	});

	app.Players = new app.PlayerList();
})($);