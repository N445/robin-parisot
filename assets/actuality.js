import './styles/actuality.scss';
const dayjs = require('dayjs');
const fr = require('dayjs/locale/fr');
const hljs = require('highlight.js');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.locale(fr);
dayjs.extend(relativeTime);

$('[data-actuality-date]').each(function (){
    let rawDate = $(this).data('actuality-date');
    let formatedDate = dayjs(rawDate).fromNow();
    $(this).html(formatedDate);
});

document.querySelectorAll('code').forEach(el => {
    // then highlight each
    hljs.highlightElement(el, {language: 'php'});
});