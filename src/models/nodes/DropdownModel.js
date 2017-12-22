import OptionsCollection from 'collections/nodes/OptionsCollection';

var DropdownModel = Backbone.Model.extend({
	
	idAttribute: 'key',
	
	initialize: function (options) {
		options = options || {};
		this.initOptions(options.options);
	},
	
	initOptions: function (options) {
		options = options || {};
		this.set('options', new OptionsCollection());
		this.get('options').setData(options);
	}
});

export {DropdownModel as default};