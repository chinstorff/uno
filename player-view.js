var app = app || {};

(function ($) {
	app.PlayerView = Backbone.View.extend({
		tagName: 'li',
		template: _.template($('#item-template').html()),
		events: {
			'keypress #addScore': 'updateOnEnter'
		},
		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
			this.$input = this.$('#addScore').val();
		},
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		close: function () {
			var stringValue = this.$('#addScore').val();
			var numberValue = parseInt(this.$('#addScore').val());
			var currentScore = this.model.get("score");
			if ($.isNumeric(numberValue)) {
				var newScore = numberValue + currentScore;
				this.model.set("score", newScore);
			} else {
				switch (stringValue) {
					case "s": {
						numberValue = 20;
						break;
					}
					case "w": {
						numberValue = 50;
						break;
					}
					case "c": {
						numberValue = 20;
						break;
					}
					case "+two": {
						numberValue = 20;
						break;
					}
					case "+four": {
						numberValue = 50;
						break;
					}
					default: {
						numberValue = 0;
						break;
					}
				}
				var newScore = numberValue + currentScore;
				this.model.set("score", newScore);
			}
		},
		updateOnEnter: function (event) {
			if (event.which === ENTER_KEY) {
				this.close();
			} else { return; }
		}
	})
})($);