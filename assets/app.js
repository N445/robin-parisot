/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';
import {Collapse} from 'bootstrap';



const dayjs = require('dayjs');
const fr = require('dayjs/locale/fr');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.locale(fr);
dayjs.extend(relativeTime);

$('[data-actuality-date]').each(function () {
    let rawDate = $(this).data('actuality-date');
    let formatedDate = dayjs(rawDate).fromNow();
    $(this).html(formatedDate);
});

$('.navbar-toggler').on('click', function () {
    $(this).blur().toggleClass('is-active');
    console.log($(this));
})

let mainBtnAnimated = $('.main-btn-animated-container');
let mainBtnAnimatedBackSelector = '.main-btn-animated-container-back';
let mainBtnAnimatedGradiantSelector = '.main-btn .gradiant';

mainBtnAnimated.mousemove(function (e) {
    const {
        left: t,
        width: n,
        top: o,
        height: i,
    } = e.target.getBoundingClientRect(), r = (e.clientX - t) / n * 100, s = (e.clientY - o) / i * 100;

    $(this).find(mainBtnAnimatedBackSelector).css('--mouse-x', String(r));
    $(this).find(mainBtnAnimatedBackSelector).css('--mouse-y', String(s));
    $(this).find(mainBtnAnimatedBackSelector).css('background-position', 'calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)');

    $(this).find(mainBtnAnimatedGradiantSelector).css('--mouse-x', String(r));
    $(this).find(mainBtnAnimatedGradiantSelector).css('--mouse-y', String(s));
    $(this).find(mainBtnAnimatedGradiantSelector).css('background-position', 'calc((100 - var(--mouse-x, 0)) * 1%) calc((100 - var(--mouse-y, 0)) * 1%)');
})
