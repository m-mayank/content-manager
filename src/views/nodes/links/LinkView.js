import template from 'templates/nodes/links/LinkTmpl.hbs';

var LinkView = Marionette.ItemView.extend({
	
	id: 'link-view',
	
	template: template,
	
	ui: {
		anchorRemove: '#anchor-remove'
	},
	
	events: {
		'click @ui.anchorRemove': 'anchorRemoveClicked'
	},
	
	bindings: {
		'#input-key': 'key',
		'#input-url': 'url',
		'#input-text-en': 'enText',
		'#input-text-de': 'deText'
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

export {LinkView as default};