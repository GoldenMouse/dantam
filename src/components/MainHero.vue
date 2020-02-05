<template>
<div class="main-hero">
    <agile :options="agileOptions" :speed=600 :autoplaySpeed=20000>
        <div class="slide">
            <div class="slide--caption" id="slidecap1">
                <div class="container">
                    <h1>Proud to serve Miss Vietnam California 2019!</h1>
                    <div class="divider"></div>
                </div>
            </div>
            <div class="slide--main" :style="{'background-image': 'url(' + require('../assets/img/main-hero-0.jpg') + ')'}"></div>
        </div>

        <div class="slide">
            <div class="slide--main" :style="{
              'background-image': 'url(' + require('../assets/img/main-hero-1.jpg') + ')', 
              'background-position': '50% 40%'}"></div>
        </div>

        <div class="slide">
            <div class="slide--main" :style="{'background-image': 'url(' + require('../assets/img/main-hero-2.jpg') + ')'}"></div>
        </div>

        <div class="slide">
            <div class="slide--main" :style="{'background-image': 'url(' + require('../assets/img/main-hero-3.jpeg') + ')'}"></div>
        </div>
        <div class="slide">
            <div class="slide--main" :style="{'background-image': 'url(' + require('../assets/img/main-hero-4.jpg') + ')'}"></div>
        </div>
    </agile>
</div>
</template>

<script>
export default {
    name: 'MainHero',
    data() {
        return {
          agileOptions: {
              arrows: false,
              dots: true,
              fade: false,
              infinite: true,
              autoplay: true,
              pauseOnHover: false,
              pauseOnDotsHover: true,
          }
      }
    },
    components: {
    }
}
</script>

<style lang="scss">
.main-hero {
    background-color: white;
    position: relative;
    display: flex;

    & .divider {
        margin-top: 1rem;
    }

    & p {
        padding: 0;
        margin: 1rem 0;
    }

    & .button {
        margin: 1rem 0;
    }

    & .agile {
        display: flex;
        width: 100%;

        &__list {
            display: flex;
            width: 100%;
        }
        &__track {
            display: flex;
            flex: 1;
            width: 100%;
        }
        &__dots {
            bottom: 2rem;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
        }

        &__dot {
            button {
                margin: 0.2rem;
                width: 0.5rem; 
                height: 0.5rem; 
                border-radius: 50%;
                border: 2px solid var(--color-bg-gray);
                background-color: var(--color-bg-gray);
                transition: all 0.2s;

                &:hover {
                    background-color: var(--color-primary-darken);
                    border-color: var(--color-primary-darken)
                }
            }

            &--current {
                button {
                    background-color: var(--color-primary-darken);
                    border-color: var(--color-primary-darken);
                }
            }
        }

        &__arrow {
            height: 100%;
            top: 0;
            width: 20px;

            &:hover {
                background-color: rgba(#000, .5);

                #arrow-svg {
                    fill: #fff;
                }
            }

            &[disabled] {
                display: none;
            }

            #arrow-svg {
                fill: rgba(#fff, .4);
                height: 25px;
            }
        }
    }

    & .slide {
        flex: 1;
        display: flex;
        width: 100%;
        height: 100%;
        position: relative;

        &--main {
            flex: 1;
            // background-position: 50% 40%;
            background-position: 50% 15%;
            background-size: cover;
            background-repeat: no-repeat;
        }

        &--caption {
            width: 30%;
            position: absolute;
            left: 1rem;
            top: 5rem;
            height: 15rem;
            background: none;
            border-radius: 1rem;
            flex: 1;
            padding: 2rem;
            justify-content: flex-start;
            background: none;
            z-index: 2;


            & .container {
                flex-direction: column;
                align-items: flex-start;
                padding: 0;
            }
            & .divider {
                align-self: right;
                margin: 0;
                &:after{ width: 8rem;}
            }
            & p {
                font-size: 1rem;
                // color: var(--font-color-primary);
                color: white;
                font-weight: 500;
            }
            & h1{
                color: white;
                font-size: 1.4rem;
            }
        }
        &:nth-child(1) .slide--caption {
            top: 9rem !important;
        }
        .overlay-image {
            position: absolute;
            right: 15%;
            bottom: 0;
            width: 25rem;
        }
    }
}

</style>