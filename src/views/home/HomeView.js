import template from 'templates/home/HomeTmpl.hbs';
import appVent from 'appVent';
import appConstants from 'appConstants';

var HomeView = Marionette.LayoutView.extend({
	
	id: 'home-view',
	
	template: template,
	
	events: {
		'click .anchor-open': 'anchorClicked',
		'click #btn-create': 'createClicked'
	},
	
	createClicked: function () {
		appVent.trigger(appConstants.EVENT_REDIRECT_TO_CREATE);
	},
	
	anchorClicked: function (event) {
		var fileName = event.target.getAttribute('data-name'), _this = this;
		this.fetchAllData(fileName).done(function(enResp, deResp) {
			_this.model.setData({
				en: enResp[0],
				de: deResp[0]
			});
			appVent.trigger(appConstants.EVENT_REDIRECT_TO_EDIT);
		});
	},
	
	fetchAllData: function (fileName) {
		var enURL = '/data/' + fileName + '/' + fileName + '-en.json';
		var deURL = '/data/' + fileName + '/' + fileName + '-de.json';
		var d1 = this.fetchData(enURL);
		var d2 = this.fetchData(deURL);
		return $.when(d1, d2);
	},
	
	fetchData: function (url) {
		var model = new Backbone.Model({});
		model.url = url;
		return model.fetch();
	}
	
});

export {HomeView as default};