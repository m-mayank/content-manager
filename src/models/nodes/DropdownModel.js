import OptionsCollection from 'collections/nodes/OptionsCollection';

var DropdownModel = Backbone.Model.extend({
	
	idAttribute: 'key',
	
	initialize: function () {
		this.initOptions();
	},
	
	initOptions: function () {
		this.set('options', new OptionsCollection());
	}
});

export {DropdownModel as default};