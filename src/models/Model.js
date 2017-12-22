import KeyValuesCollection from 'collections/nodes/KeyValuesCollection';
import LinksCollection from 'collections/nodes/LinksCollection';
import DropdownsCollection from 'collections/nodes/DropdownsCollection';

var Model = Backbone.Model.extend({

	defaults: {
		isStaticLabels: true,
		isLinks: true,
		isDropdowns: true,
		isErrorMessages: true
	},
	
	initialize: function () {
		this.initStaticLabels();
		this.initLinks();
		this.initDropdowns();
		this.initErrorMessages();
	},
	
	initStaticLabels: function () {
		this.set('staticLabels', new KeyValuesCollection());
	},
	
	initLinks: function () {
		this.set('links', new LinksCollection());
	},
	
	initDropdowns: function () {
		this.set('dropdowns', new DropdownsCollection());
	},
	
	initErrorMessages: function () {
		this.set('errorMessages', new KeyValuesCollection());
	},
	
	setData: function (data) {
		var name = _.allKeys(data.en)[0];
		this.set('name', name);
		this.setStaticLabels(name, data);
		this.setLinks(name, data);
		this.setDropdowns(name, data);
		this.setErrorMessages(name, data);
	},
	
	setStaticLabels: function (name, data) {
		var enStaticLabels = data.en[name].staticLabels;
		var deStaticLabels = data.de[name].staticLabels;
		var isStaticLabels = _.keys(enStaticLabels).length == 0 ? false : true;
		this.set('isStaticLabels', isStaticLabels);
		if (isStaticLabels) {
			this.get('staticLabels').setData({
				en: enStaticLabels,
				de: deStaticLabels
			});
		} else {
			this.get('staticLabels').reset();
		}
	},
	
	setLinks: function (name, data) {
		var enLinks = data.en[name].links;
		var deLinks = data.de[name].links;
		var isLinks = _.keys(enLinks).length == 0 ? false : true;
		this.set('isLinks', isLinks);
		if (isLinks) {
			this.get('links').setData({
				en: enLinks,
				de: deLinks
			});
		} else {
			this.get('links').reset();
		}
	},
	
	setDropdowns: function (name, data) {
		var enDropdowns = data.en[name].dropdowns;
		var deDropdowns = data.de[name].dropdowns;
		var isDropdowns = _.keys(enDropdowns).length == 0 ? false : true;
		this.set('isDropdowns', isDropdowns);
		if (isDropdowns) {
			this.get('dropdowns').setData({
				en: enDropdowns,
				de: deDropdowns
			});
		} else {
			this.get('dropdowns').reset();
		}
	},
	
	setErrorMessages: function (name, data) {
		var enErrorMessages = data.en[name].errorMessages;
		var deErrorMessages = data.de[name].errorMessages;
		var isErrorMessages = _.keys(enErrorMessages).length == 0 ? false : true;
		this.set('isErrorMessages', isErrorMessages);
		if (isErrorMessages) {
			this.get('errorMessages').setData({
				en: enErrorMessages,
				de: deErrorMessages
			});
		} else {
			this.get('errorMessages').reset();
		}
	},
	
	getData: function () {
		var en = {}, de = {}, name = this.get('name');
		en[name] = {
			staticLabels: this.get('staticLabels').getData().en,
			links: this.get('links').getData().en,
			dropdowns: this.get('dropdowns').getData().en,
			errorMessages: this.get('errorMessages').getData().en
		};
		de[name] = {
			staticLabels: this.get('staticLabels').getData().de,
			links: this.get('links').getData().de,
			dropdowns: this.get('dropdowns').getData().de,
			errorMessages: this.get('errorMessages').getData().de
		};
		return {
			en: en,
			de: de
		};
	}

});

export {Model as default};