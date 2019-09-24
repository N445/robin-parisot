require('bootstrap');
require('@fortawesome/fontawesome-free/css/all.min.css');
require('@fortawesome/fontawesome-free/js/all.js');
const routes = require('../../public/js/fos_js_routes.json');
import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);
import WOW from 'wow.js';

$(document).ready(function () {
    new WOW().init();
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