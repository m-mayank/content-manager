import config from './app-config';
import bootstrap from 'foundation-sites/dist/css/foundation.min.css';
import css from './app.css';
import appConstants from './appConstants';
import appVent from './appVent';
import AppRouter from './AppRouter';
import AppLayoutView from './views/AppLayoutView';

var App = Marionette.Application.extend({
	
	initialize: function () {
		this.subscribeToAppVent();
		this.addRegion();
	},
	
	subscribeToAppVent: function () {
		this.listenTo(appVent, appConstants.EVENT_REDIRECT_TO_HOME, this.showView, this);
	},
	
	onStart: function () {
		this.showView();
		this.startHistory();
	},
	
	addRegion: function () {
		this.addRegions({
			region: '#app-region'
		});
	},
	
	showView: function () {
		this.region.show(new AppLayoutView());
	},
	
	startHistory: function () {
		var router = new AppRouter();
		if (Backbone.history) {
			Backbone.history.start();
		}
	}
});

var app = new App();
app.start();