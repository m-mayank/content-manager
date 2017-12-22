import template from 'templates/nodes/dropdowns/OptionTmpl.hbs';

var OptionView = Marionette.ItemView.extend({
	
	id: 'option-view',
	
	template: template,
	
	ui: {
		anchorRemove: '#anchor-remove'
	},
	
	events: {
		'click @ui.anchorRemove': 'anchorRemoveClicked'
	},
	
	bindings: {
		'#input-value': 'value',
		'#input-label-en': 'enLabel',
		'#input-label-de': 'deLabel'
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

export {OptionView as default};