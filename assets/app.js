/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// start the Stimulus application
// require jQuery normally
const $ = require('jquery');

// create global $ and jQuery variables
global.$ = global.jQuery = $;


require('bootstrap')
require('@popperjs/core')
require('@fortawesome/fontawesome-free/js/all.min')

// import './bootstrap';
console.log('app')

$.each($('.toast'),function () {
    $(this).toast('show')
})