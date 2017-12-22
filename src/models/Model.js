import KeyValuesCollection from 'collections/nodes/KeyValuesCollection';
import DropdownsCollection from 'collections/nodes/DropdownsCollection';

var Model = Backbone.Model.extend({

	initialize: function () {
		this.initStaticLabels();
		this.initDropdowns();
		this.initErrorMessages();
	},
	
	initStaticLabels: function () {
		this.set('staticLabels', new KeyValuesCollection());
	},
	
	initDropdowns: function () {
		this.set('dropdowns', new DropdownsCollection());
	},
	
	initErrorMessages: function () {
		this.set('errorMessages', new KeyValuesCollection());
	},
	
	getData: function () {
		return {
			en: {
				staticLabels: this.get('staticLabels').getData().en,
				dropdowns: this.get('dropdowns').getData().en,
				errorMessages: this.get('errorMessages').getData().en
			},
			de: {
				staticLabels: this.get('staticLabels').getData().de,
				dropdowns: this.get('dropdowns').getData().de,
				errorMessages: this.get('errorMessages').getData().de
			}
		};
	}

});

export {Model as default};