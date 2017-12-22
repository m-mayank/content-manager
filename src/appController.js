import appVent from './appVent';
import appConstants from './appConstants';

var appController = {
		
		fnHome: function () {
			appVent.trigger(appConstants.EVENT_SHOW_HOME);
		},
		
		fnCreate: function () {
			appVent.trigger(appConstants.EVENT_SHOW_CREATE);
		},
		
		fnEdit: function () {
			appVent.trigger(appConstants.EVENT_SHOW_EDIT);
		},
		
		fnDisplay: function () {
			appVent.trigger(appConstants.EVENT_SHOW_DISPLAY);
		},
		
		defaultAction: function () {
			this.navigate('#home', {
				trigger: true
			});
		}
	};

export {appController as default};