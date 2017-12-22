import DropdownModel from 'models/nodes/DropdownModel';

var DropdownsCollection = Backbone.Collection.extend({
	
	model: DropdownModel,
	
	addModel: function () {
		this.add(new DropdownModel());
	},
	
	setData: function (data) {
		var keyValues = [], keys = _.allKeys(data.en);
		_.each(keys, function (key) {
			keyValues.push({
				key: key,
				options: {
					en: data.en[key],
					de: data.de[key]
				}
			})
		});
		this.reset(keyValues);
	},
	
	getData: function () {
		var en = {}, de = {}, key;
		this.each(function (model) {
			key = model.get('key');
			en[key] = model.get('options').getData().en;
			de[key] = model.get('options').getData().de;
		})
		return {
			en: en,
			de: de
		}
	}
	
});

export {DropdownsCollection as default};