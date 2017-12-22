import appVent from './appVent';
import appConstants from './appConstants';
import appController from './appController';

var AppRouter = Marionette.AppRouter.extend({
	
	appRoutes: {
		'home': 'fnHome',
		'create': 'fnCreate',
		'edit': 'fnEdit',
		'display': 'fnDisplay',
		'*actions': 'defaultAction'
	},
	
	controller: appController,
	
	initialize: function () {
		this.controller.navigate = this.navigate;
		this.subscribeToVent();
	},
	
	subscribeToVent: function () {
		this.listenTo(appVent, appConstants.EVENT_REDIRECT_TO_HOME, this.redirectToHome, this);
		this.listenTo(appVent, appConstants.EVENT_REDIRECT_TO_CREATE, this.redirectToCreate, this);
		this.listenTo(appVent, appConstants.EVENT_REDIRECT_TO_EDIT, this.redirectToEdit, this);
		this.listenTo(appVent, appConstants.EVENT_REDIRECT_TO_DISPLAY, this.redirectToDisplay, this);
	},
	
	redirectToHome: function () {
		this.navigate('#home', {
			trigger: true
		});
	},
	
	redirectToCreate: function () {
		this.navigate('#create', {
			trigger: true
		});
	},
	
	redirectToEdit: function () {
		this.navigate('#edit', {
			trigger: true
		});
	},
	
	redirectToDisplay: function () {
		this.navigate('#display', {
			trigger: true
		});
	}
});

export {AppRouter as default};