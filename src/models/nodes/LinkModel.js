var LinkModel = Backbone.Model.extend({
	idAttribute: 'url',
	
	getData: function (locale) {
		var text = locale + 'Text';
		return {
			text: this.get(text),
			url: this.get('url')
		};
	}
});

export {LinkModel as default};