import template from 'templates/AppLayoutTmpl.hbs';
import appVent from '../appVent';
import appConstants from '../appConstants';
import Model from 'models/Model'
import HomeView from './home/HomeView';
import CreateView from './create/CreateView';
import EditView from './edit/EditView';
import DisplayView from './display/DisplayView';

var AppLayoutView = Marionette.LayoutView.extend({
	
	id: 'app-layout-view',
	
	template: template,
	
	regions: {
		'layoutRegion': '#layout-region'
	},
	
	initialize: function () {
		this.subscribeToAppVent();
		this.model = new Model();
	},
	
	subscribeToAppVent: function () {
		this.listenTo(appVent, appConstants.EVENT_SHOW_HOME, this.renderHomeView, this);
		this.listenTo(appVent, appConstants.EVENT_SHOW_CREATE, this.renderCreateView, this);
		this.listenTo(appVent, appConstants.EVENT_SHOW_EDIT, this.renderEditView, this);
		this.listenTo(appVent, appConstants.EVENT_SHOW_DISPLAY, this.renderDisplayView, this);
	},
	
	renderHomeView: function () {
		this.layoutRegion.show(new HomeView());
	},
	
	renderCreateView: function () {
		this.layoutRegion.show(new CreateView({
			model: this.model
		}));
	},
	
	renderEditView: function () {
		this.layoutRegion.show(new EditView({
			model: this.model
		}));
	},
	
	renderDisplayView: function () {
		this.layoutRegion.show(new DisplayView({
			model: this.model
		}));
	}
});

export {AppLayoutView as default};