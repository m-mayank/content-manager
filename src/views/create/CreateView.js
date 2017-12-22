import template from 'templates/create/CreateTmpl.hbs';
import appVent from 'appVent';
import appConstants from 'appConstants';

var CreateView = Marionette.ItemView.extend({
	
	id: 'create-view',
	
	template: template,

	ui: {
		'btnCreate': '#btn-create'
	},
	
	events: {
		'click @ui.btnCreate': 'createClicked'
	},
	
	bindings: {
		'#input-name': 'name',
		'#cb-static-labels': 'isStaticLabels',
		'#cb-links': 'isLinks',
		'#cb-dropdowns': 'isDropdowns',
		'#cb-error-messages': 'isErrorMessages'
	},
	
	onRender: function () {
		this.stickit();
	},
	
	onShow: function () {
		window.scrollTo(0,0)
	},
	
	createClicked: function () {
		appVent.trigger(appConstants.EVENT_REDIRECT_TO_EDIT);
	},
	
	onDestroy: function () {
		this.unstickit();
	}
	
});

export {CreateView as default};