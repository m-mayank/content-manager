import template from 'templates/nodes/dropdowns/DropdownTmpl.hbs';
import OptionView from './OptionView';

var DropdownView = Marionette.CompositeView.extend({
	
	id: 'dropdown-view',
	
	className: 'sub-node-container',
	
	template: template,

	childViewContainer: '#option-region',
	
	childView: OptionView,
	
	ui: {
		anchorAddOption: '#anchor-add-option',
		anchorDropdownRemove: '#anchor-remove-dropdown'
	},
	
	events: {
		'click @ui.anchorAddOption': 'anchorAddOptionClicked',
		'click @ui.anchorDropdownRemove': 'anchorRemoveDropdownClicked'
	},
	
	bindings: {
		'#input-key': 'key'
	},
	
	onRender: function () {
		this.stickit();
	},
	
	anchorAddOptionClicked: function () {
		this.collection.addModel();
	},
	
	anchorRemoveDropdownClicked: function () {
		this.model.collection.remove(this.model);
	},
	
	onDestroy: function () {
		this.unstickit();
	}
	
});

export {DropdownView as default};