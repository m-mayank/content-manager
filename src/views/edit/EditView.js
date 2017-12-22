import template from 'templates/edit/EditTmpl.hbs';
import appVent from 'appVent';
import appConstants from 'appConstants';
import KeyValuesView from 'views/nodes/key-value/KeyValuesView';
import DropdownsView from 'views/nodes/dropdowns/DropdownsView';

var EditView = Marionette.LayoutView.extend({
	
	id: 'edit-view',
	
	template: template,

	ui: {
		'btnSave': '#btn-save'
	},
	
	events: {
		'click @ui.btnSave': 'saveClicked'
	},
	
	regions: {
		staticLabelsRegion: '#static-labels-container',
		linksRegion: '#links-container',
		dropdownsRegion: '#dropdowns-container',
		errorMessagesRegion: '#error-messages-container'
	},
	
	onRender: function () {
		this.stickit();
	},
	
	onShow: function () {
		this.renderStaticLabels();
		this.renderDropdownsView();
		this.renderErrorMessages();
	},
	
	saveClicked: function () {
		appVent.trigger(appConstants.EVENT_REDIRECT_TO_DISPLAY);
	},
	
	renderStaticLabels: function () {
		if (this.model.get('isStaticLabels')) {
			this.staticLabelsRegion.show(new KeyValuesView({
				collection: this.model.get('staticLabels'),
				header: 'Static Labels'
			}));
		}
	},
	
	renderDropdownsView: function () {
		if (this.model.get('isDropdowns')) {
			this.dropdownsRegion.show(new DropdownsView({
				collection: this.model.get('dropdowns')
			}));
		}
	},
	
	renderErrorMessages: function () {
		if (this.model.get('isErrorMessages')) {
			this.errorMessagesRegion.show(new KeyValuesView({
				collection: this.model.get('errorMessages'),
				header: 'Error Messages'
			}));
		}
	},
	
	onDestroy: function () {
		this.unstickit();
	}
	
});

export {EditView as default};