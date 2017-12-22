import template from 'templates/nodes/key-value/KeyValueTmpl.hbs';

var KeyValueView = Marionette.ItemView.extend({
	
	id: 'key-value-view',
	
	template: template,
	
	ui: {
		anchorRemove: '#anchor-remove'
	},
	
	events: {
		'click @ui.anchorRemove': 'anchorRemoveClicked'
	},
	
	bindings: {
		'#input-key': 'key',
		'#input-value': 'value',
		'#input-value-de': 'valueDE'
	},
	
	onRender: function () {
		this.stickit();
	},
	
	anchorRemoveClicked: function () {
		this.model.collection.remove(this.model);
	},
	
	onDestroy: function () {
		this.unstickit();
	}
	
});

export {KeyValueView as default};