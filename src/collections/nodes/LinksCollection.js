import LinkModel from 'models/nodes/LinkModel';

var LinksCollection = Backbone.Collection.extend({
	
	model: LinkModel,
	
	addModel: function () {
		this.add(new LinkModel());
	},
	
	setData: function (data) {
		var links = [], keys = _.allKeys(data.en);
		_.each(keys, function (key) {
			links.push({
				key: key,
				url: data.en[key].url,
				enText: data.en[key].text,
				deText: data.de[key].text
			})
		});
		this.reset(links);
	},
	
	getData: function () {
		var en = {}, de = {}, key;
		this.each(function (model) {
			key = model.get('key');
			en[key] = model.getData('en');
			de[key] = model.getData('de');
		});
		return {
			en: en,
			de: de
		};
	}
	
});

export {LinksCollection as default};