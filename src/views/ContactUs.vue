<template>
<div class="contactus" id="contactus">
    <div class="container">
        <TitleHeader title='Contact Us'>
            Have any questions? Feel free to use the contact form below to get in touch with us. We will answer you as soon as possible!
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
        <form>
            <div class="input-wrapper input-name">
                <i class="far fa-user"></i>
                <input type="text" name="name" autocomplete="off"/>
            </div>
            <div class="input-wrapper">
                <i class="far fa-envelope"></i>
                <input type="email" name="email" autocomplete="off"/>
            </div>
            <div class="input-wrapper">
                <i class="fas fa-phone"></i>
                <input type="tel" name="phone" autocomplete="off"/>
            </div>
            <div class="input-wrapper">
                <i class="far fa-edit"></i>
                <textarea name="message"></textarea>
            </div>
            <button class="btn" type="submit">Send Message</button>
        </form>
    </div>
</div>
</template>

<script>
import TitleHeader from '@/components/TitleHeader'

export default {
    name: 'ContactUs',
    components: {
        TitleHeader,
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
        }

        & button {
            margin: 2rem 0;
            align-self: center;
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
}
</style>