import template from 'templates/home/HomeTmpl.hbs';
import appVent from 'appVent';
import appConstants from 'appConstants';

var HomeView = Marionette.LayoutView.extend({
	
	id: 'home-view',
	
	template: template,
	
	events: {
		'click #btn-create': 'createClicked'
	},
	
	createClicked: function () {
		appVent.trigger(appConstants.EVENT_REDIRECT_TO_CREATE);
	}
	
});

export {HomeView as default};