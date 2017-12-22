import KeyValueModel from 'models/nodes/KeyValueModel';

var KeyValuesCollection = Backbone.Collection.extend({
	
	model: KeyValueModel,
	
	addModel: function () {
		this.add(new KeyValueModel());
	},
	
	setData: function (data) {
		var keyValues = [], keys = _.allKeys(data.en);
		_.each(keys, function (key) {
			keyValues.push({
				key: key,
				enValue: data.en[key],
				deValue: data.de[key]
			})
		});
		this.reset(keyValues);
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