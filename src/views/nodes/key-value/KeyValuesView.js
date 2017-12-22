import template from 'templates/nodes/key-value/KeyValuesTmpl.hbs';
import KeyValueView from './KeyValueView';

var KeyValuesView = Marionette.CompositeView.extend({
	
	id: 'key-values-view',
	
	className: 'node-container',
	
	template: template,

	childViewContainer: '#key-values-region',
	
	childView: KeyValueView,
	
	ui: {
		anchorAdd: '#anchor-add'
	},
	
	events: {
		'click @ui.anchorAdd': 'anchorAddClicked'
	},
	
	templateHelpers: function() {
		return {
			header: this.getOption('header')
		}
	},
	
	anchorAddClicked: function () {
		this.collection.addModel();
	}
	
});

export {KeyValuesView as default};