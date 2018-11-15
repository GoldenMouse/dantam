<template>
<div class="main-hero">
    <div class="container">
        <carousel :items="1" :nav="false" :animateOut="fadeOut">
        <div class="slide">
            <div class="left">
                <h1>Blameless Nail Salon Creating Beauty</h1>
                <div class="divider"></div>
                <p>Our Our Nail Salon brings unique and 
                   custom nail designs to all customers of LA area. 
                   We are a team of nail artists specializing on complete nail care.
                </p>
                <button class="btn-solid">Read More</button>
            </div>

            <div class="right">
            </div>
        </div>

        <div class="slide">
            <div class="left">
                <h1>Be Different with Our Nail Design</h1>
                <div class="divider"></div>
                <p>
                    Our qualified team provides a full range of nail design services 
                    to satisfy even the most demanding clients.
                </p>
                <button class="btn-solid">Read More</button>
            </div>

            <div class="right">
            </div>
        </div>

        <div class="slide">
            <div class="left">
                <h1>Better Nail Care for Your Pleasure</h1>
                <div class="divider"></div>
                <p>
                    We are dedicated to bring you the best nail care services 
                    combined with expert techniques used in the nail salon industry.
                </p>
                <button class="btn-solid">Read More</button>
            </div>

            <div class="right">
            </div>
        </div>
        </carousel>

    </div>
    <img src="@/assets/hands.png" class="overlay-image"/>
</div>
</template>

<script>
import carousel from 'v-owl-carousel'
export default {
    name: 'MainHero',
    components: {
        carousel
    }
}
</script>

<style lang="scss" scoped>
.main-hero {
    background-color: #f1f1f1;
    background-image: url('../assets/paint-background.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 5rem 0;
    position: relative;
    height: 65vh;
}

h1 {
    font-size: 3rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
}

p {
    font-size: 1.1em;
    color: var(--font-color-light);
    font-weight: 500;
    padding: 2rem 0;
}

.divider:after{
    content: '';
    display: inline-block;
    width: 90px;
    height: 3px;
    background-color: var(--color-primary);
}

.slide {
    display: flex;
    position: relative;
    height: 100%;
}

.left,
.right {
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
}

.left {
    padding-left: 1rem;
}

.overlay-image {
    position: absolute;
    right: 20%;
    bottom: 0;
    width: 300px;
}

.owl-dot {
    color: blue;
}

 
</style>