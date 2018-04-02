var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var OpenSeadragon = require('openseadragon');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var HelloModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'HelloModel',
        _view_name : 'HelloView',
        _model_module : 'iiif',
        _view_module : 'iiif',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello World'
    })
});


// Custom View. Renders the widget model.
var HelloView = widgets.DOMWidgetView.extend({
    render: function() {
		HelloView.__super__.render.apply(this, arguments);
        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
    },

    value_changed: function() {

		this.el.classList.add('jupyter-widgets');
		this.el.classList.add('iiif-container');
	
		var viewer = OpenSeadragon({
			element: this.el,
			prefixUrl: "/view/iiif/static/images/",
			preserveViewport: true,
			visibilityRatio: 1,
			minZoomLevel: 1,
			defaultZoomLabel: 1,
			sequenceMode: true,
			showNavigationControl: false,
			tileSources: [
				this.model.get('url')
			]
		});
    }
});


module.exports = {
    HelloModel : HelloModel,
    HelloView : HelloView
};
