require('bootstrap');
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');
require('./../modules/redactor3/redactor.min');
require('./../modules/redactor3/plugins/alignment.min');
require('./../modules/redactor3/plugins/counter.min');
require('./../modules/redactor3/plugins/fontcolor.min');
require('./../modules/redactor3/plugins/fontfamily.min');
require('./../modules/redactor3/plugins/fontsize.min');
require('./../modules/redactor3/plugins/inlinestyle.min');
require('./../modules/redactor3/plugins/properties.min');
require('./../modules/redactor3/plugins/specialchars.min');
require('./../modules/redactor3/plugins/table.min');
require('./../modules/redactor3/plugins/video.min');
const routes = require('../../public/js/fos_js_routes.json');
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';
import bsCustomFileInput from 'bs-custom-file-input';

var moment = require('moment');
require('moment/locale/fr');
moment.locale('fr');

Routing.setRoutingData(routes);
import WOW from 'wow.js';
import Noty from 'noty';
require('jquery-parallax.js');
require('select2/dist/js/select2.full.min');

$(document).ready(function () {

    $.each($('.actualite-date'), function (key, actualiteDate) {
        var data = $(actualiteDate).data('data');
        // $(actuality).find('.actualite-date').html(moment(data, "DD-MM-YYYY").format("dddd Do MMMM YYYY"));
        $(actualiteDate).html(moment(data, "DD-MM-YYYY").fromNow());
    })

    bsCustomFileInput.init();
    var wow = new WOW(
        {
            mobile: false,       // trigger animations on mobile devices (default is true)
            resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();
    $('.tags-select2').select2({
        multiple: true,
        tags: true,
    });
    $R('.redactor', {
        plugins: ['alignment', 'counter', 'fontcolor', 'fontfamily', 'fontsize', 'inlinestyle', 'properties', 'specialchars', 'table', 'video']
    });

    $('.tags-select2').val($('.tags-select2').data('selected-choices'));
    $('.tags-select2').trigger('change');

    $('[data-toggle="popover"]').popover();
    $('.main-navbar .nav-item').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        $('.navbar-nav .nav-item').removeClass('active');
        $this.addClass('active');
        var href = $($this.find('.nav-link').attr('href'));
        $('html, body').animate({
            scrollTop: href.offset().top - 70
        }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = href;
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            }
            ;
        });
    })

    $('body').on('click', '.contact-send', function (e) {
        e.preventDefault();
        console.log($(this).parent('form').serialize());
        $.ajax({
            url: Routing.generate('homepage'),
            method: "POST",
            data: $(this).parent('form').serialize()
        }).always(function (data) {
            console.log(data);
            if (data.success) {
                new Noty({
                    type: 'success',
                    theme: 'relax',
                    text: 'Votre message à bien été envoyé',
                    timeout: 2000
                }).show();
            }
            else {
                new Noty({
                    type: 'error',
                    theme: 'relax',
                    text: 'Une erreur est survenue',
                    timeout: 2000
                }).show();
            }
            $('form').html(data.view);
        })
    })

    $('.custom-switch input').on('click', function (e) {
        $.post(Routing.generate('contact_switch_update', {id: $(this).data('entity')}), {
            fieldname: $(this).data('fieldname'),
            value: $(this).prop('checked')
        });
    });
});