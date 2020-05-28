$(document).ready(function () {
    console.log('%cBonjour à toi le DEV ! :D', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
    // $('[data-toggle="popover"]').popover();
    // highlight.initHighlightingOnLoad();
    hljs.initHighlightingOnLoad();

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

    $('.rssFeed').on('click', function (e) {
        e.preventDefault();
        $('.rssFeed').removeClass('active');
        $(this).addClass('active');
        var filter = $(this).data('filter');
        if ('*' === filter) {
            $('.rssItem').slideDown(200);
            return;
        }
        $('.rssItem').not(filter).slideUp(200);
        $('.rssItem' + filter).slideDown(200);
    })

    $('body').on('click', '.contact-send', function (e) {
        e.preventDefault();
        $.ajax({
            url: Routing.generate('homepage'),
            method: "POST",
            data: $(this).parent('form').serialize()
        }).always(function (data) {
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
