<template>
<div class="contactus" id="contactus">
    <div class="container">
        <TitleHeader title='Contact Us'>
            Have any questions? Feel free to use the contact form below to get in touch with me. I will answer you as soon as possible!
        </TitleHeader>
        <div class="contact-info">
            <div class="address">
                <i class="fas fa-home"></i>
                <p>123 Fake St, <br/> Sunnyvale, CA 94087</p>
            </div>
            <div class="email">
                <i class="fas fa-envelope"></i>
                <p><a href="mailto:dantambeauty@gmail.com">dantambeauty@gmail.com</a></p>
            </div>
            <div class="phone">
                <i class="fas fa-phone"></i>
                <p><a href="tel:14085077178">+1 (408) 507-7178</a></p>
            </div>
        </div>
        <form refs=contactForm v-if="!form_submitted_ok">
            <div class="input-wrapper input-name">
                <i class="far fa-user"></i>
                <input type="text" name="name" autocomplete="off" v-model="contact.name"/>
            </div>
            <div class="input-wrapper">
                <i class="far fa-envelope"></i>
                <input type="email" name="email" autocomplete="off" v-model="contact.email" @input="$v.email.$touch()"/>
            </div>
                <p v-if="!$v.contact.email.email">Please provide a valid email address</p>
            <div class="input-wrapper">
                <i class="fas fa-phone"></i>
                <input type="tel" name="phone" autocomplete="off" v-model="contact.phone" />
            </div>
            <div class="input-wrapper">
                <i class="far fa-edit"></i>
                <textarea name="message" v-model="contact.message"></textarea>
            </div>
            <button class="btn" type="submit" 
                @click.prevent="sendEmail"
                :disabled="submit_button_text === 'Sending...'">
              {{ submit_button_text }}
            </button>
        </form>
        <div class="form-submitted" v-if="form_submitted_ok">
            <div><i class="fas fa-check-circle"></i></div>
            <h4>Thank you! Our team will review your inquiry and contact you shortly.</h4>
        </div>
    </div>
</div>
</template>

<script>
// import emailjs from 'emailjs-com'
import * as emailjs from 'emailjs-com'
import { required, email } from 'vuelidate/lib/validators'
import TitleHeader from '@/components/TitleHeader'


export default {
    name: 'ContactUs',
    components: {
        TitleHeader,
    },
    data(){
        return {
            contact: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            submit_button_text: 'Send Message',
            form_submitted_ok: false
        }
    },
    validations: {
        contact: {
            email: {
                required,
                email
            },
        }
    },
    methods: {
        validateForm(){
            var contact = this.contact
            if ( contact.name && contact.email && contact.message) {
                return true
            } else {return false}
        },
        sendEmail() {
            if (this.validateForm()) {
                this.submit_button_text = 'Sending...';
                var contact = this.contact
                var template_params = {
                    "from_name": contact.name ,
                    "from_phone": contact.phone,
                    "from_email": contact.email,
                    "from_message": contact.message 
                }

                var service_id = "default_service"
                var template_id = "dantambeauty"
                emailjs.send(service_id,template_id,template_params)
                    .then(response => {
                        // eslint-disable-next-line
                        console.log('SUCCESS!', response.status, response.text);
                        this.form_submitted_ok = true
                    }, error => {
                        // eslint-disable-next-line
                        console.log('FAILED...', error);
                        this.form_submitted_error = true
                    });
            } else {
                alert("invalid")
            }
        }
    },
    mounted() {
        emailjs.init('user_yBtR1v6RD0eEkr4e460Jn')
    }
}
</script>

<style lang="scss">
.contactus {
    padding-bottom: 1rem;

    & > .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    & p {
        padding-top: 0;
        padding-bottom: 1.5rem;
        width: 60%;
        text-align: center;
    }

    & form {
        display: inline-flex;
        flex-direction: column;
        font-size: 1.4rem;
        width: 60%;

        & .input-wrapper {
            display: flex;
            position: relative;
        }

        & i {
            position: absolute;
            left: 2rem;
            top: 1.2rem;
            color: var(--font-color-light);
        }

        & input, textarea {
            width: 100%;
            line-height: 1.4em;
            border-radius: 25px;
            box-shadow: none;
            border: 1px solid #a1a1a1;
            margin: 0.5rem;
            padding: 0.8rem 1rem;
            padding-left: 4rem;
            outline: none;
            color: var(--font-color);
            font-family: var(--font-family-alt);
            font-weight: 500;
        }

        & textarea{
            height: 10rem; 
            white-space: pre-wrap;
        }

        & button {
            margin: 2rem 0;
            align-self: center;

            &:disabled {
              cursor: not-allowed;
            }
        }
    }

    & .contact-info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 1.5rem 0;
        & i {
            font-size: 1.6rem;
            color: var(--color-primary);
            margin: 0 2rem;
        }
        & > div {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;

            & > p {
                width: 100%;
                text-align: left;
                font-family: var(--font-family-alt);
                color: var(--font-color-primary);
                font-size: 1rem;

                & a {
                    text-decoration: underline;
                }
            }
        }
    }

    .form-submitted {
        display: flex;
        flex-direction: column;
        align-items: center;
        i {
            color: green;
            font-size: 2.4rem;
            padding: 1rem;
        }
    }
}
</style>