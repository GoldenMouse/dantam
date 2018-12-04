<template>
<div class="nav-bar-mobile">
    <div class="mobile--header">
        <Hamburger :class="{ hamburger: true, active: hamActive}" @click.native="toggleNav" />
        
        <div class="brand" @click="$router.push({ name: 'home' })">
            <h1>[DanTam Beauty]</h1>
        </div>

        <i :class="{ fas: true, 'fa-ellipsis-v': true, 'fa-ellipsis-v--active': ellipseActive }"
           @click="ellipseActive = !ellipseActive"></i>
    </div>

    <div class="mobile--menu" :class="{ 'mobile--menu--active': hamActive }">
        <ul>
            <li><router-link :to="{ name: 'home' }" @click.native="toggleNav">Home</router-link></li>
            <li><router-link :to="{ name: 'about' }" @click.native="toggleNav">About</router-link></li>
            <li><router-link :to="{ name: 'services' }" @click.native="toggleNav">Services</router-link></li>
            <li><router-link :to="{ name: 'portfolio' }" @click.native="toggleNav">Portfolio</router-link></li>
            <li><router-link :to="{ name: 'contactus' }" @click.native="toggleNav">Contact</router-link></li>
            <li><router-link :to="{ name: 'blog' }" @click.native="toggleNav">Contact</router-link></li>
        </ul>
    </div>

    <div class="mobile--small-menu" :class="{ 'mobile--small-menu--active': ellipseActive }">
        <div class="contact-info">
            <div class="telephone">
                <span>Call Us: </span>
                <a href="#">(408) 271-8345</a>
            </div>
            <div class="hours">
                <span>Opening Hours: </span>
                <span>Mn-Fri: 10 am-8 pm</span>
            </div>
        </div>
        <div class="social">
            <ul>
                <li><a href="#" class="fab fa-facebook-f"></a></li>
                <li><a href="#" class="fab fa-twitter"></a></li>
                <li><a href="#" class="fab fa-google-plus-g"></a></li>
                <li><a href="#" class="fab fa-pinterest-p"></a></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import Hamburger from '@/components/Hamburger'

export default {
    name: 'NavBarMobile',
    data() {
        return {
            hamActive: false,
            ellipseActive: false,
        }
    },
    methods: {
        toggleNav() {
            this.hamActive = !this.hamActive 
        }
    },
    components: {
        Hamburger
    }
}
</script>

<style lang="scss">
.nav-bar-mobile {
    display: none;

    & .hamburger {
        margin-left: 0.5rem;
    }

    & .mobile--header {
        width: 100%;
        height: 4.5rem;
        border-bottom: 1px solid #eaeced;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        z-index: 10;

        .brand {
            margin: 0 auto;
        }
        & .brand h1 {
            cursor: pointer;
            padding-top: 0.4rem;
            font-family: 'Countryside', 'serif';
            font-size: 1.6rem;
            color: var(--color-primary-darken);
            line-height: 1.9;
            padding-left: 1rem;
        }

        & .fa-ellipsis-v {
            padding: 0 2rem;
            font-size: 1.5rem;
            transition: all 0.35s;

            &--active {
                transform: scale(0.7) rotateX(180deg);

            }
        }
    }

    & .mobile--menu {
        z-index: 9;
        padding-top: 5rem;
        width: 15rem;
        position: fixed;
        left: -999px;
        top: 0;
        bottom: 0;
        background-color: #fff;
        border: 1px solid #eaeced;
        transition: all 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);


        & a {
            padding: 1rem 1.5rem;
            display: inline-block;
            width: 100%;
        }

        & .router-link-exact-active,
          a:active {
            color: #fff;
            background-color: var(--color-primary);
        }
    }

    & .mobile--menu--active {
        left: 0;
    }

    & .mobile--small-menu {
        padding: 0.5rem 1rem;
        background-color: white;
        border: 1px solid #eaeced;
        z-index: 2;
        position: fixed;
        top: 4.5rem;
        right: 0;
        width: 20rem;
        line-height: 1.7;
        right: -999px;
        opacity: 0;
        transition: opacity 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);

        & .contact-info {
             & div span:first-child {
                font-weight: 700;
            }
        }

        & .social {
            margin-top: 0.5rem;
        }

        & ul li {
            display: inline-block;
            padding-right: 1rem;
        }
    }

    & .mobile--small-menu--active {
        opacity: 1;
        right: 0;
    }
    
}


</style>