<template>
  <div id="app">
    <BackToTop/>
    <ContactBar/> 
    <NavBarMobile/> 
    <NavBar/> 
    <div ref="content" class="content" id="content">
        <router-view/>
    </div>
    <Footer v-show="$router.currentRoute.name != 'home'"/>
    <MediaQueries/>
  </div>
</template>

<script>
import BackToTop from '@/components/BackToTop'
import ContactBar from '@/components/ContactBar'
import NavBar from '@/components/NavBar'
import NavBarMobile from '@/components/NavBarMobile'
import Footer from '@/components/Footer'
import MediaQueries from '@/components/MediaQueries'

export default {
    name: 'App',
    components: {
        BackToTop,
        ContactBar,
        NavBar,
        NavBarMobile,
        Footer,
        MediaQueries
    },
}
</script>

<style lang="scss">


/***
@include breakpoint(large) {
    .contact-bar, .nav-bar {
        display: none;
    }
    .nav-bar-mobile {
        display: flex;
    }
}

@include breakpoint(medium) {
    .container h1 {
        font-size: 1.8rem;
    }
    p {
        font-size: 0.9rem !important;
    }
    .back-to-top {
        transform: scale(0.8);
    }
    .main-hero .overlay-image,
    .main-hero .right {
        display: none;
    }
    .main-hero .container .left {
        margin: 0 auto;
        width: 80%;
    }
    #about .container {
        flex-direction: column;
    }
    #about .container .right {
        margin-top: 2rem;
        width: 70%;
    }
    #about .image-with-backdots {
        padding: 0;
    }
    #about .image-with-backdots > img {
        left: 1rem;
        bottom: 1rem;
        width: 15rem;
        height: auto;
        transform: translateX(-2rem);
    }
    #services .service-icons {
        grid-template-columns: 1fr;
        grid-template-areas: 's1'
                       's2'
                       's3'
                       's4'
                       'i';
    }
    #services .service p {
        width: 70%;
    }
    .home .pricing > .container > .pricing__table {
        flex-direction: column;
        width: 70%;

        & .left, .right {
            margin: 0;
        }
    }
    .home .pricing > .container p {
        width: 70%;
    }
    .home .testimonials .agile {
        width: 90%;

        & blockquote {
            margin: 2rem 0;
            font-size: 0.8rem !important;

            &:before,
            &:after {
                display: none;
            }
        }
        & .signature {
            margin-top: 1rem;
            font-size: 1rem;
        }
    }
    .contactus > .container > form,
    .contactus > .container > p,
    {
        width: 80%;
    }
    .footer > .container {
        display: flex;
        flex-direction: column;
        align-items: center;

        & h4 {
            margin: 0;
            margin-bottom: 0.5rem;
            transform: none;
        }
    }
    .portfolio ul {
        width: 80%;
        margin: 0 auto;
    }
    .portfolio ul button {
        padding: 1rem 0;
    }
    .portfolio .isotope .item {
        width: 40% !important;
        margin-bottom: 1rem !important; 
        height: 10rem !important;
    }
}

@include breakpoint(small) {
    .container h1 {
        font-size: 1.3rem;  
    }
    p {
        font-size: 0.8rem !important;
    }
    .nav-bar-mobile .brand h1 {
        font-size: 1rem !important;
    }
    .nav-bar-mobile .hamburger,
    .nav-bar-mobile .fa-ellipsis-v {
        transform: scale(0.8);
    }
} 

***/

#app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    // padding-bottom: 5rem; // for footer
    // position: relative;
    // min-height: 100%;

    & .contact-bar, 
      .nav-bar, 
      .nav-bar-mobile, {
        flex: 0 0 auto;
    }

    & .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        & > div {
            flex: 1;
        }
    }

    & .footer {
        flex: 0 0 3rem;
    }
}


:root {
  --color-primary: #ffd8cb;
  --color-primary-rgb: 255,216,203;
  --color-primary-darken:#ffb399; 
  --color-primary-darken-rgb: 255, 179, 153;
  --color-bg-gray-lighten: #f4f4f4;
  --color-bg-gray: #f1f1f1;
  --color-bg-gray-darken:#e7e7e7;
  --font-family-primary: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-alt: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-color: #151515;
  --font-color-light: #9b9b9b;
}

@font-face {
    font-family: "Candice";
    src: url(./assets/fonts/billy-argel_candice/candice.ttf);
}
@font-face {
    font-family: "Countryside";
    src: url(./assets/fonts/billy-argel_countryside/countryside2.ttf);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

body,html {
  font-family: var(--font-family-primary);
  color: var(--font-color);
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
  line-height: 1.5;
  background-color: #ffffff;
  scroll-behavior: smooth;
  height: 100%;

}

a {
  text-decoration: none;
  color: var(--font-color);
}

ul {
  list-style: none;
}

i {
  color: #151515;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

h1 {
    font-size: 1.8rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
}

h2 {
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0;
}

p {
    font-size: 1.1rem;
    color: var(--font-color-light);
    font-weight: 500;
    padding: 2rem 0;
}

section {
    margin: 3rem 0;
}

.btn {
  padding: 11px 32px;
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  font-size: 0.9rem;
  font-family: var(--font-family-alt);
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-overflow: ellipsis;
  border-radius: 25px;
  line-height: 24px;

    &:hover {
        background-color: var(--color-primary-darken);
    }
}

.btn.inverted {
  background-color: transparent;
  border: 2px solid var(--color-primary);

  &:hover {
    background-color: var(--color-primary);
    color: #ffff;
  }
}

.container {
  display: flex;
  max-width: 1120px;
  padding-right: 40px;
  padding-left: 40px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}


.divider:after{
    content: '';
    display: inline-block;
    width: 90px;
    height: 3px;
    background-color: var(--color-primary);
}
</style>
