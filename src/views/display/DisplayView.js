import template from 'templates/display/DisplayTmpl.hbs';

var CreateView = Marionette.ItemView.extend({
	
	id: 'display-view',
	
	template: template,

	ui: {
		'enContainer': '#en-container',
		'deContainer': '#de-container'
	},
	
	onRender: function () {
		var data = this.model.getData();
		this.ui.enContainer.html(this.formatJSON(data.en));
		this.ui.deContainer.html(this.formatJSON(data.de));
	},
	
	formatJSON: function (data) {
		var f = {
			brace: 0
		};
		return JSON.stringify(data).replace(/({|}[,]*|[^{}:]+:[^{}:,]*[,{]*)/g, function (m, p1) {
		    var rtnFn = function() {
		    		return '<div style="text-indent: ' + (f['brace'] * 20) + 'px;">' + p1 + '</div>';
		    },
		    rtnStr = 0;
		    if (p1.lastIndexOf('{') === (p1.length - 1)) {
		        rtnStr = rtnFn();
		        f['brace'] += 1;
		    } else if (p1.indexOf('}') === 0) {
		        f['brace'] -= 1;
		        rtnStr = rtnFn();
		    } else {
		        rtnStr = rtnFn();
		    }
		    return rtnStr;
		});
	}
	
});

export {CreateView as default};