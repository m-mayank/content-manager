import LinkModel from 'models/nodes/LinkModel';

var LinksCollection = Backbone.Collection.extend({
	
	model: LinkModel,
	
	addModel: function () {
		this.add(new LinkModel());
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