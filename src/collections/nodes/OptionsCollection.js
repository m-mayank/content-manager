import OptionModel from 'models/nodes/OptionModel';

var OptionsCollection = Backbone.Collection.extend({
	
	model: OptionModel,
	
	addModel: function () {
		this.add(new OptionModel());
	},
	
	getData: function () {
		var en = [], de = [], value;
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