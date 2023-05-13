/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/homepage.scss';

// start the Stimulus application
import './bootstrap';
import {ScrollSpy} from 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// const scrollSpy = new ScrollSpy(document.body, {
//     target: '#main-navbar',
// })
