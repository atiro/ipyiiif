// Entry point for the notebook bundle containing custom model definitions.
//
// Setup notebook base URL
//
// Some static assets may be required by the custom widget javascript. The base
// url for the notebook is not known at build time and is therefore computed
// dynamically.
__webpack_public_path__ = document.querySelector('body').getAttribute('data-base-url') + 'nbextensions/iiif/';

require('./iiif.css');
require('./images/button_grouphover.png');
require('./images/button_hover.png');
require('./images/button_pressed.png');
require('./images/button_rest.png');
require('./images/fullpage_grouphover.png');
require('./images/fullpage_hover.png');
require('./images/fullpage_pressed.png');
require('./images/fullpage_rest.png');
require('./images/home_grouphover.png');
require('./images/home_hover.png');
require('./images/home_pressed.png');
require('./images/home_rest.png');
require('./images/next_grouphover.png');
require('./images/next_hover.png');
require('./images/next_pressed.png');
require('./images/next_rest.png');
require('./images/previous_grouphover.png');
require('./images/previous_hover.png');
require('./images/previous_pressed.png');
require('./images/previous_rest.png');
require('./images/rotateleft_grouphover.png');
require('./images/rotateleft_hover.png');
require('./images/rotateleft_pressed.png');
require('./images/rotateleft_rest.png');
require('./images/rotateright_grouphover.png');
require('./images/rotateright_hover.png');
require('./images/rotateright_pressed.png');
require('./images/rotateright_rest.png');
require('./images/zoomin_grouphover.png');
require('./images/zoomin_hover.png');
require('./images/zoomin_pressed.png');
require('./images/zoomin_rest.png');
require('./images/zoomout_grouphover.png');
require('./images/zoomout_hover.png');
require('./images/zoomout_pressed.png');
require('./images/zoomout_rest.png');

// Export widget models and views, and the npm package version number.
module.exports = require('./iiif.js');
module.exports['version'] = require('../package.json').version;
