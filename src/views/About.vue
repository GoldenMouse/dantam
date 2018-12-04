<template>
<div class="about" id="about">
    <TitleHeader title="About Me"></TitleHeader>
    <section class="summary">
        <div class="container">
            <div class="summary--left">
                <figure>
                    <img src="../assets/about-main.jpg" alt="Tam Dan Truong"/>
                    <div class="summary--name">
                        <h2>Dan Tam Truong</h2>
                        <sub>Hair &amp; Makeup Artist</sub>
                    </div>
                </figure>
            </div>
            <div class="summary--right">
                <p> Some people think make-up and beautification is for vanity and for those who are ashamed of their looks. I believe they misunderstand the many reasons and purposes for those of us who like to dress up or want to look fantastic on those special occasions.
                </p>

                <p> For me, the way someone applies their make-up or chooses to appear overall is an extension of who they are as a person inside. In this way, when I am styling someone’s hair or mindfully applying make-up, I am trying to create a natural and glamorous look that accurately shows on the outside the beauty of that person inside. This means every person has a unique style, what works or looks good on one person may not be so on another. 
                </p>

                <p> Just as important, I find a great joy and sense of accomplishment when I make my client happy with my work. I understand it can be a stressful time during these events and I try to do my part to make it one less worry and instead turn it into a pleasing and positive experience. It can be very difficult at time to do this, but that is why I enjoy being a Beauty Artist, the challenge and the reward of making someone look beautiful makes all the time, effort, and training well worth it.
                </p>
            </div>
        </div>
    </section>

    <section class="testimonials">
        <TitleHeader title="Testimonials"></TitleHeader>
        <agile :options="agileOptions" :speed=600 :autoplaySpeed=6000>
            <div class="slide">
                <div class="card">
                    <div class="signature">Zachary M.</div>
                    <blockquote>Lorem ex exercitation dolore nisi et voluptate cillum consequat ullamco laborum amet tempor id. Officia veniam in est incididunt eiusmod consequat velit ad incididunt voluptate est ut duis.</blockquote>
                </div>
                <div class="card">
                    <div class="signature">Hanh Cao</div>
                    <blockquote>Officia veniam in est incididunt eiusmod consequat velit ad incididunt voluptate est ut duis. Elit nostrud reprehenderit nisi cillum cillum nisi cillum nisi.
                    </blockquote>
                </div>
            </div>
            
            <div class="slide">
                <div class="card">
                    <div class="signature">Frank Ma</div>
                    <blockquote>Officia veniam in est incididunt eiusmod consequat velit ad incididunt voluptate est ut duis.</blockquote>
                </div>
                <div class="card">
                    <div class="signature">Chau Nguyen</div>
                    <blockquote>Officia veniam in est incididunt eiusmod consequat velit ad incididunt voluptate est ut duis. Elit nostrud reprehenderit nisi cillum cillum nisi cillum nisi.
                    </blockquote>
                </div>
            </div>
        </agile>

        <agile :options="agileOptions" :speed=600 :autoplaySpeed=6000 class="agile--mobile">
            <div class="slide">
                <div class="card">
                    <div class="signature">Zachary M.</div>
                    <blockquote>Lorem ex exercitation dolore nisi et voluptate cillum consequat ullamco laborum amet tempor id. Officia veniam in est incididunt eiusmod consequat velit ad incididunt voluptate est ut duis.</blockquote>
                </div>
            </div>
            <div class="slide">
                <div class="card">
                    <div class="signature">Hanh Cao</div>
                    <blockquote>Officia veniam in est incididunt eiusmod consequat velit ad incididunt voluptate est ut duis. Elit nostrud reprehenderit nisi cillum cillum nisi cillum nisi.
                    </blockquote>
                </div>
            </div>
            <div class="slide">
                <div class="card">
                    <div class="signature">Frank Ma</div>
                    <blockquote>Officia veniam in est incididunt eiusmod consequat velit ad incididunt voluptate est ut duis.</blockquote>
                </div>
            </div>
            <div class="slide">
                <div class="card">
                    <div class="signature">Chau Nguyen</div>
                    <blockquote>Officia veniam in est incididunt eiusmod consequat velit ad incididunt voluptate est ut duis. Elit nostrud reprehenderit nisi cillum cillum nisi cillum nisi.
                    </blockquote>
                </div>
            </div>
        </agile>
    </section>

    <!-- <section class="whyChooseUs">
        <div class="container">
            <div class="left">
                <div class="image-with-backdots">
                    <img src="@/assets/backdots.png" alt="background dots"/>
                    <img src="@/assets/glamor.jpeg" alt="why choose us?"/>
                </div>
            </div>
            <div class="right">
                <h1>Why My Clients</h1>
                <h1><span class="divider"></span> Choose Me</h1>
                <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
                </p>
            </div>

        </div>
    </section> -->
</div>
</template>

<script>
import TitleHeader from '@/components/TitleHeader'

export default {
    name: 'About',
    components: {
        TitleHeader,
    },
    data() {
        return {
          agileOptions: {
              arrows: false,
              dots: true,
              fade: false,
              infinite: true,
              autoplay: true,
          }
      }
    }
}
</script>

<style lang="scss">
.about {
    & .title-header p {padding: 0;}
    & .summary {
        & .container {
            align-items: flex-start;
        }
        & p {
            margin: 0;
            padding: 0.6rem 0.5rem;
            font-family: var(--font-family-primary);
            color: #737373;
            &:nth-of-type(1)::first-letter {
                text-transform: uppercase;
                color: var(--color-primary-darken);
                font-size: 120%;
                float: left;
                font-family: Georgia;
                font-size: 4rem;
                line-height: 40px;
                padding-top: 8px;
                padding-right: 8px;
            }
        }
        &--right {
            width: 55%;
            margin-left: 2rem;
        }
        &--name {
            padding: 0.5rem 0.5rem;
            text-align: left;
            & h2 {  
                font-family: var(--font-family-primary); 
                color: var(--color-primary-darken); 
                font-weight: 500;
                font-size: 1.8rem;
                line-height: 0.9;
                padding-top: 0.5rem;
            }
            & sub { 
                color: #9b9b9b;
                font-size: 1rem;
                font-style: italic;
            }
        }
        & figure {
            display: inline-flex;
            flex-direction: column;

            & img {
                box-shadow: 0 0 22px rgba(0, 0, 0, 0.1);
            }
        }
    }

    & .whyChooseUs {
        margin-top: 6rem;

        & > .container > .left, .right {
            width: 50%;
            margin: 0 3rem;
            display: flex;
            flex-direction: column;
        }
        & > .container > .left {
            align-items: center;
        }
        & > .container > .right {
            align-items: flex-start;
        }
    }

    .divider {
        display: inline-block;
        &:after {
            margin-bottom: 0.5rem;
            width: 80px;
            margin-right: 0.5rem;
        }
    }

    .image-with-backdots {
        position: relative;
        padding-top: 6rem;

        & > img:last-child {
            position: absolute;
            left: 5rem;
            bottom: 4rem;
            width: 320px; 
            height: 440px;
        }
    }

    .image-cover {
        height: 100%;
        transform: translateX(-2rem);
        //object-fit: none;

    }

    .testimonials .agile {
        width: 70%;
        margin: 0 auto;

        &--mobile {
            display: none;
        }

        &__dots {
            bottom: 0;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
        }

        &__dot {
            button {
                margin: 0.2rem;
                width: 1rem; 
                height: 1rem; 
                border-radius: 50%;
                border: 2px solid #a9a9a9;
                background-color: transparent;
                transition: all 0.2s;

                &:hover {
                    background-color: var(--font-color);
                    border-color: var(--font-color)
                }
            }

            &--current {
                button {
                    background-color: var(--font-color);
                    border-color: var(--font-color)
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

    .testimonials .slide {
        display: flex;
        width: 100%;
        padding: 1rem;


        .card {
            flex: 1;
            max-width: 70rem;
            padding: 3rem 4rem;
            padding-bottom: 4.5rem;
            box-shadow: 0 0 22px rgba(0,0,0,.1);
            border-bottom: 4px solid var(--color-primary);
            margin-bottom: 4rem; 
            background-color: #fff;
            position: relative;

            &:first-child {
                margin-right: 2rem;
            }

            &:after {
                position: absolute;
                right: 3rem;
                bottom: 0.5rem;
                background-size: 50px 50px;
                background-image: url(../assets/svg/quote.svg);
                display:inline-block;
                width: 50px;
                height: 50px;
                content: '';
            }
        }
    }

    .testimonials blockquote {
        position: relative;
        font-style: italic;
        color: var(--font-color-light);

        
       
    }
    .testimonials .signature {
        border-right: 1px solid #d5d5d5;
        font-size: 1.2rem;
        display: inline-block;
        padding-right: 1rem;
        margin-bottom: 1.5rem;
        font-family: var(--font-family-alt);
        position: relative;

        &:after {
            content: 'Client';
            position: absolute;
            top: 0;
            right: -4.5rem;
            font-family: var(--font-family-primary);
            color: var(--font-color-light);
            font-size: 1.2rem;
        }
    }
}

</style>