// this loads jquery, but does *not* set a global $ or jQuery variable
const $ = require('jquery');
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

Routing.setRoutingData(routes);
require('select2/dist/js/select2.full.min');

$(document).ready(function () {


    bsCustomFileInput.init();

    $('.tags-select2').select2({
        multiple: true,
        tags: true,
    });
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
