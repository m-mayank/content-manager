import template from 'templates/nodes/dropdowns/DropdownsTmpl.hbs';
import DropdownView from './DropdownView';

var DropdownsView = Marionette.CompositeView.extend({
	
	id: 'dropdowns-view',
	
	template: template,

	childViewContainer: '#dropdowns-region',
	
	childView: DropdownView,
	
	ui: {
		anchorAdd: '#anchor-add'
	},
	
	events: {
		'click @ui.anchorAdd': 'anchorAddClicked'
	},
	
	buildChildView: function(child, ChildViewClass, childViewOptions){
		// build the final list of options for the childView class
		var options = _.extend({
			model: child,
			collection: child.get('options')
		}, childViewOptions);
		// create the child view instance
		var view = new ChildViewClass(options);
		// return it
		return view;
	},
	
	anchorAddClicked: function () {
		this.collection.addModel();
	}
	
});

export {DropdownsView as default};