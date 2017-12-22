import KeyValueModel from 'models/nodes/KeyValueModel';

var KeyValuesCollection = Backbone.Collection.extend({
	
	model: KeyValueModel,
	
	addModel: function () {
		this.add(new KeyValueModel());
	},
	
	getData: function () {
		var en = {}, de = {}, key;
		this.each(function (model) {
			key = model.get('key');
			en[key] = model.get('enValue');
			de[key] = model.get('deValue');
		});
		return {
			en: en,
			de: de
		};
	}
	
});

export {KeyValuesCollection as default};