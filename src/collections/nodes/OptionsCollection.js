import OptionModel from 'models/nodes/OptionModel';

var OptionsCollection = Backbone.Collection.extend({
	
	model: OptionModel,
	
	addModel: function () {
		this.add(new OptionModel());
	},
	
	setData: function (data) {
		var options = [], values = _.pluck(data.en, 'value');
		_.each(values, function (value) {
			options.push({
				value: value,
				enLabel: this._getLabel(data.en, value),
				deLabel: this._getLabel(data.de, value)
			})
		}, this);
		this.reset(options);
	},
	
	_getLabel: function (data, value) {
		return _.find(data, function (obj) { return value === obj.value}).label;
	},
	
	getData: function () {
		var en = [], de = [];
		this.each(function (model) {
			en.push(model.getData('en'));
			de.push(model.getData('de'));
		});
		return {
			en: en,
			de: de
		};
	}
	
});

export {OptionsCollection as default};