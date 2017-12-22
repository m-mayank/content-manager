var OptionModel = Backbone.Model.extend({
	idAttribute: 'value',
	
	getData: function (locale) {
		var label = locale + 'Label';
		return {
			label: this.get(label),
			value: this.get('value')
		};
	}
});

export {OptionModel as default};