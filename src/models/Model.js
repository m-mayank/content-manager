import KeyValuesCollection from 'collections/nodes/KeyValuesCollection';

var Model = Backbone.Model.extend({

	initialize: function () {
		this.initStaticLabels();
		this.initErrorMessages();
	},
	
	initStaticLabels: function () {
		this.set('staticLabels', new KeyValuesCollection());
	},
	
	initErrorMessages: function () {
		this.set('errorMessages', new KeyValuesCollection());
	},
	
	getData: function () {
		return {
			en: {
				staticLabels: this.get('staticLabels').getData().en,
				errorMessages: this.get('errorMessages').getData().en
			},
			de: {
				staticLabels: this.get('staticLabels').getData().de,
				errorMessages: this.get('errorMessages').getData().de
			}
		};
	}

});

export {Model as default};