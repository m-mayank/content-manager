import template from 'templates/nodes/links/LinksTmpl.hbs';
import LinkView from './LinkView';

var LinksView = Marionette.CompositeView.extend({
	
	id: 'key-values-view',
	
	template: template,

	childViewContainer: '#links-region',
	
	childView: LinkView,
	
	ui: {
		anchorAdd: '#anchor-add'
	},
	
	events: {
		'click @ui.anchorAdd': 'anchorAddClicked'
	},
	
	anchorAddClicked: function () {
		this.collection.addModel();
	}
	
});

export {LinksView as default};