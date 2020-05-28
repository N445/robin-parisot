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
});
