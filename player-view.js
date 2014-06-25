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
	    var input = this.$('#addScore').val();
	    var newScore = this.model.get('score') + unoCalcScore(input);
	    this.model.set('score', newScore);
	    this.$('#addScore').val('').focus();
	},
	updateOnEnter: function (event) {
	    if (event.which === ENTER_KEY) {
		this.close();
	    } else { return; }
	}
    })
})($);
