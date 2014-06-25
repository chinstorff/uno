var app = app || {};

(function ($) {
    app.PlayerList = Backbone.Collection.extend({
	model: app.Player,
    });

    app.Players = new app.PlayerList();
})($);
