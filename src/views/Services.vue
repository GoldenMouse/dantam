<template>
<div class="services" id="services">
    <TitleHeader title="Services"></TitleHeader>
    <section class="service-icons">
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/makeupstuff.svg" alt="makeup material"/>
            </div>
            <h2>Makeup</h2>
            <p>No ius facer electram, mel an enim nihil eirmod. Ceteros alienum ad nec.</p>
        </div>
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/brush.svg" alt="brush"/>
            </div>
            <h2>Hair</h2>
            <p>Ne quo oportere appellantur, ut vix esse liber molestie. Enim tamquam maiorum per id</p>
        </div>
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/eyebrow.svg" alt="eyebrow" class="eyebrow"/>
            </div>
            <h2>Eyebrows</h2>
            <p>Id nam meis nonumy interpretaris, est simul recusabo in, in qui justo omnes. Cetero aliquam ius ei, malorum appellantur sea cu.</p>
        </div>
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/handmirror.svg" alt="handmirror"/>
            </div>
            <h2>Touch-Up</h2>
            <p>Ex vim possit habemus maluisset, alienum delicata repudiare ei eum. Amet alia pertinacia sea ea</p>
        </div>
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/lotions.svg" alt="lotions"/>
            </div>
            <h2>Facials</h2>
            <p>Ex vim possit habemus maluisset, alienum delicata repudiare ei eum. Amet alia pertinacia sea ea</p>
        </div>
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/comb.svg" alt="comb"/>
            </div>
            <h2>Others</h2>
            <p>Ex vim possit habemus maluisset, alienum delicata repudiare ei eum. Amet alia pertinacia sea ea</p>
        </div>

        <!-- <div class="service-image"><img src="@/assets/bridal.jpeg" alt="bridal hair" class="image-cover"/></div> -->
    </section>

    <section class="pricing">
        <div class="container">
            <h1>Pricing</h1>
            <div class="divider"></div>
            <p>
                Do eiusmod pariatur aliqua quis duis quis et Lorem anim esse laboris incididunt nostrud.
                Et enim exercitation qui commodo.
            </p>
            <div class="pricing__table">
                <div class="left">
                    <div class="item">
                        <div class="item--name">
                            <h2>Essential</h2>
                            <p>60 &mdash; 100 Minute Sessions</p>
                        </div>
                        <div class="item--price">
                            <h2>40.00</h2>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item--name">
                            <h2>Essential</h2>
                            <p>60 &mdash; 100 Minute Sessions</p>
                        </div>
                        <div class="item--price">
                            <h2>40.00</h2>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item--name">
                            <h2>Essential</h2>
                            <p>60 &mdash; 100 Minute Sessions</p>
                        </div>
                        <div class="item--price">
                            <h2>40.00</h2>
                        </div>
                    </div>
                </div>

                <div class="right">
                    <div class="item">
                        <div class="item--name">
                            <h2>Essential</h2>
                            <p>60 &mdash; 100 Minute Sessions</p>
                        </div>
                        <div class="item--price">
                            <h2>40.00</h2>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item--name">
                            <h2>Essential</h2>
                            <p>60 &mdash; 100 Minute Sessions</p>
                        </div>
                        <div class="item--price">
                            <h2>40.00</h2>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item--name">
                            <h2>Essential</h2>
                            <p>60 &mdash; 100 Minute Sessions</p>
                        </div>
                        <div class="item--price">
                            <h2>40.00</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import TitleHeader from '@/components/TitleHeader'

export default {
    name: 'Services',
    components: {
        TitleHeader,
    },
}
</script>

<style lang="scss">
.services {
    & .service-icons  {
        background-color: var(--color-bg-gray-lighten);
        margin: 0;
        padding: 0.5rem 10%;
        display: grid;
        grid-template-columns: auto repeat(3, 1fr) auto;
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas: '. s1 s2 s3 .'
                            '. s4 s5 s6 .'
    }

    & .service {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding: 0 3rem;
        text-align: center;
        position: relative;
        &:before {
            position: absolute;
            content: '';
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            background: #ffffff;
            box-shadow: 0 0 22px rgba(0, 0, 0, 0.1);
            transition: all .3s;
            transform: translate(-50%, -50%);
            opacity: 0;
        }
        &:hover::before {
            width: 104%;
            height: 108%;
            opacity: 1;
        }
        & p {
            font-size: 1em; 
            padding: 0;
            margin: 1rem 0;
            font-weight: 400;
            z-index: 1;
        }
        & h2 {
            z-index: 1;
        }
        &:nth-child(1) {
            grid-area: s1;
            border-right: 1px solid var(--color-bg-gray-darken);
            border-bottom: 1px solid var(--color-bg-gray-darken);
        }
        &:nth-child(2) {
            grid-area: s2;
            // border-left: 1px solid var(--color-bg-gray-darken);
            border-right: 1px solid var(--color-bg-gray-darken);
            border-bottom: 1px solid var(--color-bg-gray-darken);
        }
        &:nth-child(3) {
            grid-area: s3;
            border-bottom: 1px solid var(--color-bg-gray-darken);
            // border-top: 1px solid var(--color-bg-gray-darken);
        }
        &:nth-child(4) {
            grid-area: s4;
            border-right: 1px solid var(--color-bg-gray-darken);
        }
        &:nth-child(5) {
            grid-area: s5;
            border-right: 1px solid var(--color-bg-gray-darken);
        }
        &:nth-child(6) {
            grid-area: s6;
        }
        &-image {
            grid-area: i;
            overflow: hidden;
        }
        & .pink-circle-bg {
            position: relative;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: var(--color-primary);
            margin: 1rem;
        }
        & img.eyebrow {
            width: 4rem;
            transform: translateY(0.7rem);
        }
    }

    & .pricing {
        & > .container {
            display: flex;
            flex-direction: column;
        }
        & .divider {
            padding: 1rem 0;
        }
        & p {
            padding: 0;
            padding-bottom: 1rem;
            max-width: 40rem;
            text-align: center;
            font-size: 1rem;
        }
        & > .container > .pricing__table {
            display: flex;
            width: 100%;

            & h2 {
                font-family: var(--font-family-primary);
            }
            & > .left, .right {
                display: flex;
                flex-direction: column;
                margin: 0 2rem;
                width: 100%;
            }
            & .item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 0;
                border-bottom: 1px solid var(--color-bg-gray-darken);

                &:last-child {
                    border-bottom: none;
                }

                &--name {
                    margin-right: 3rem;
                    & p {
                        padding-top: 0.5rem;
                    }
                }
                &--price {
                    & h2:before {
                        content: '\0024';

                    }
                }
            }
        }
    }
}
</style>