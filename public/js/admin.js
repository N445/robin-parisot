$(document).ready(function () {


    bsCustomFileInput.init();

    $R('.redactor', {
        plugins: ['alignment', 'counter', 'fontcolor', 'fontfamily', 'fontsize', 'inlinestyle', 'properties', 'specialchars', 'table', 'video']
    });

    $('.tags-select2').val($('.tags-select2').data('selected-choices'));
    $('.tags-select2').trigger('change');

    $('.custom-switch input').on('click', function (e) {
        $.post(Routing.generate('contact_switch_update', {id: $(this).data('entity')}), {
            fieldname: $(this).data('fieldname'),
            value: $(this).prop('checked')
        });
    });


    var flashContainer = $('.flash-message-wrapper');
    var flashMessages = flashContainer.find('.flash-message');
    if (flashMessages.length > 0) {
        $.each(flashMessages, function (key, message) {
            message = $(message);
            // alert, success, warning, error, info/information
            var type = "info";
            if (message.hasClass('alert-alert')) {
                type = "alert";
            }
            if(message.hasClass('alert-success')) {
                type = "success";
            }
            if(message.hasClass('alert-warning')) {
                type = "warning";
            }
            if(message.hasClass('alert-danger')) {
                type = "error";
            }
            if(message.hasClass('alert-error')) {
                type = "error";
            }

            new Noty({
                theme: 'relax',
                type: type,
                text: message.find('.message').html(),
                timeout: 2000 + ((key + 1) * 1000),
                queue: "notification",
            }).show();

        })
    }

});
