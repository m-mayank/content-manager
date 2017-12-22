import template from 'templates/nodes/key-value/KeyValueTmpl.hbs';

var KeyValueView = Marionette.ItemView.extend({
	
	id: 'key-value-view',
	
	className: 'sub-node-container',
	
	template: template,
	
	ui: {
		richTextContainer: '#rich-text-container',
		plainTextContainer: '#plain-text-container',
		anchorToggle: '#anchor-toggle',
		anchorRemove: '#anchor-remove'
	},
	
	events: {
		'click @ui.anchorToggle': 'anchorToggleClicked',
		'click @ui.anchorRemove': 'anchorRemoveClicked'
	},
	
	bindings: {
		'#input-key': 'key',
		'#input-value-en': 'enValue',
		'#input-value-de': 'deValue'
	},
	
	onRender: function () {
		this.stickit();
	},
	
	anchorToggleClicked: function () {
		this.ui.plainTextContainer.toggleClass('hide');
		this.ui.richTextContainer.toggleClass('hide');
	},
	
	anchorRemoveClicked: function () {
		this.model.collection.remove(this.model);
	},
	
	onDestroy: function () {
		this.unstickit();
	}
	
});

export {KeyValueView as default};