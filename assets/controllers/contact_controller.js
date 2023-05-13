// assets/controllers/some-custom-controller.js
// ...
import {Controller} from '@hotwired/stimulus';
import {getComponent} from '@symfony/ux-live-component';

export default class extends Controller {

    async initialize() {
        this.component = await getComponent(this.element);

        this.recaptchaSiteKey = this.component.valueStore.get('site_key');


        this.setRecaptchaValue();

        this.component.on("render:finished", () => {
            this.setRecaptchaValue();
        });
    }

    setRecaptchaValue() {
        grecaptcha.ready(() => {
            grecaptcha.execute(this.recaptchaSiteKey, {
                action: 'homepage'
            }).then((token) => {
                let recaptchaField = document.getElementById('contact_captcha');
                recaptchaField.value = token;
                recaptchaField.dispatchEvent(new Event('change', {bubbles: true}));
            });
        })
    }
}