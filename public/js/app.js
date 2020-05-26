
//const routes = require('../../public/js/fos_js_routes.json');

//Routing.setRoutingData(routes);

$(document).ready(function () {

    // $('[data-toggle="popover"]').popover();
    //highlight.initHighlightingOnLoad();

    // $.each($('.actualite-date'), function (key, actualiteDate) {
    //     var data = $(actualiteDate).data('data');
    //     // $(actuality).find('.actualite-date').html(moment(data, "DD-MM-YYYY").format("dddd Do MMMM YYYY"));
    //     $(actualiteDate).html(moment(data, "DD-MM-YYYY").fromNow());
    // })


   /* $('.main-navbar .nav-item').on('click', function (e) {
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
    })*/

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
});
