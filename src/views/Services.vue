<template>
<div class="services" id="services">
    <TitleHeader title="Services"></TitleHeader>
    <section class="service-icons">
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/makeup.svg" alt="makeup material"/>
            </div>
            <h2>Makeup</h2>
        </div>
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/brush.svg" alt="brush"/>
            </div>
            <h2>Hair</h2>
        </div>
         <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/handmirror.svg" alt="handmirror"/>
            </div>
            <h2>Touch-Up</h2>
        </div>
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/eyebrow.svg" alt="eyebrow" class="eyebrow"/>
            </div>
            <h2>Brows</h2>
        </div>
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/eyeliner.svg" alt="lotions"/>
            </div>
            <h2>Eyeliner</h2>
        </div>
        <div class="service">
            <div class="pink-circle-bg">
                <img src="@/assets/svg/eyelashes.svg" alt="comb"/>
            </div>
            <h2>Lashes</h2>
        </div>
    </section>

    <section class="pricing">
        <div class="container">
            <h1>Pricing</h1>
            <div class="divider"></div>
            <p>
              We try to keep this page up to date but please double check with us at the time of service.
              Also, be sure to read over the 
              <router-link 
                tag="a" 
                to="#terms" 
                @click.native="scrollFix('#terms')">Terms of Service</router-link> 
            </p>
            <div class="pricing__table">
                <div class="left">
                    <div class="item">
                        <div class="item--title">Bridal
                          <router-link class="asterisk" to="#terms" @click.native="scrollFix('#terms')"/>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Makeup &#43; Hair</p>
                            <div class="subitem--price">200</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Makeup</p>
                            <div class="subitem--price">100</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Hair</p>
                            <div class="subitem--price">100</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Touch-ups</p>
                            <div class="subitem--price">100 /hr</div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="item--title">Bridesmaids
                          <router-link class="asterisk" to="#terms" @click.native="scrollFix('#terms')"/>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Makeup &#43; Hair</p>
                            <div class="subitem--price">100</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Makeup</p>
                            <div class="subitem--price">50</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Hair</p>
                            <div class="subitem--price">50</div>
                        </div>
                    </div> 

                    <div class="item">
                        <div class="item--title">Trial</div>
                        <div class="subitem">
                            <p class="subitem--name">Makeup &#43; Hair</p>
                            <div class="subitem--price">100</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Makeup</p>
                            <div class="subitem--price">50</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Hair</p>
                            <div class="subitem--price">50</div>
                        </div>
                    </div>

                      <div class="item">
                        <div class="item--title">Engagements</div>
                        <div class="subitem">
                            <p class="subitem--name">Makeup &#43; Hair</p>
                            <div class="subitem--price">200</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Makeup</p>
                            <div class="subitem--price">100</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Hair</p>
                            <div class="subitem--price">100</div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="item--title">Special Occasions</div>
                        <div class="subitem">
                            <p class="subitem--name">Makeup &#43; Hair</p>
                            <div class="subitem--price">100</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Makeup</p>
                            <div class="subitem--price">50</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Hair</p>
                            <div class="subitem--price">50</div>
                        </div>
                    </div>
                </div>

                <div class="right">
                    <div class="item">
                        <div class="item--title">Brows</div>
                        <div class="subitem">
                            <p class="subitem--name">Microblading &#43; Ombre</p>
                            <div class="subitem--price">300</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Microblading</p>
                            <div class="subitem--price">200</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Ombre</p>
                            <div class="subitem--price">200</div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="item--title">Eyeliner</div>
                        <div class="subitem">
                            <p class="subitem--name">Wing Eyeliner</p>
                            <div class="subitem--price">300</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Lash Enhancement</p>
                            <div class="subitem--price">200</div>
                        </div>
                    </div>

                     <div class="item">
                        <div class="item--title">Lashes</div>
                        <div class="subitem">
                            <p class="subitem--name">Lift &#43; Tinting</p>
                            <div class="subitem--price">80</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Lift</p>
                            <div class="subitem--price">50</div>
                        </div>
                        <div class="subitem">
                            <p class="subitem--name">Tinting</p>
                            <div class="subitem--price">50</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
          <div class="terms" id="terms">
              <div class="terms--title">Terms of Service</div>
              <div class="terms--item">
                <div>
                  <span class="terms--subtitle">Bridal & Bridesmaid Services</span>
                  <span class="asterisk"></span>
                </div>
                <p>Touch-up price is per hour (evenings). Airbrush makeup included, after consultation. Faux lashes included. Body airbrushing (scars & tattoo coverage) will be quoted.</p>
              </div>

              <div class="terms--item">
                <div class="terms--subtitle">Deposit</div>
                <p>A 20% deposit (client's total price) with contract is required to reserve dates (NON-REFUNDABLE and NON-TRANSFERABLE).</p>
              </div>

              <div class="terms--item">
                <div class="terms--subtitle">Extended Service</div>
                <p>Full day rates will be quoted. Lodging and a vendor meal are required when working more than 6 hours.</p>
              </div>

              <div class="terms--item">
                <div class="terms--subtitle">Travel Fees</div>
                <p>$1 per mile round trip (to location and back), from makeup studio.</p>
              </div>

              <div class="terms--item">
                <div class="terms--subtitle">Early Start Fees</div>
                <p>Before 8am add $50, before 6am add $100.</p>
              </div>

              <div class="terms--item">
                <div class="terms--subtitle">Parking Fees</div>
                <p>Hotel parking fees will be charged to the contract or hotel room on the day of the event, if a parking fee is required.</p>
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
    methods: {
      scrollFix: function(hashbang)
      {
        location.href = hashbang;
      }
    }
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
            padding: 0;
            margin: 1rem 0;
            font-weight: 400;
            z-index: 1;
        }
        & h2 {
            z-index: 1;
            margin: 1rem 0;
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
        .asterisk::after {
          content: '\002a';
          color: var(--color-primary-darken);
          font-size: 1.4rem;
        }
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
                padding: 1.5rem 0;
                border-bottom: 1px solid var(--color-bg-gray-darken);

                &:last-child {
                    border-bottom: none;
                }
                &--title {
                  font-size: 1.4rem;
                  margin: 0.5rem 0;
                }

                .subitem {
                  display: flex;
                  justify-content: space-between;

                  &--name {
                    padding-bottom: 0.3rem;
                    padding-left: 0.5rem;
                    text-align: left;
                  }
                  &--price {
                    padding-right: 0.5rem;
                    &:before {
                        content: '\0024';
                    }
                  }
                }
            }
        }
    }

    .terms {
      border: 2px solid var(--color-primary);
      border-radius: 0.2rem;
      position: relative;
      padding: 1.5rem;
      padding-top: 2rem;
      margin: 3rem 1rem;
      margin-bottom: 1rem;

      &--title {
        font-size: 1.2em;
        font-weight: 600;
        position: absolute;
        padding: 0 1rem;
        left: 50%;
        transform: translateX(-50%);
        top: -1rem;
        background-color: #fff;
      }

      &--subtitle {
        font-size: 1.1em;
        padding-bottom: 0.2rem;
        padding-top: 0.5rem;
        text-decoration: underline;
      }
      p {
        text-align: left;
      }

    }
}
</style>