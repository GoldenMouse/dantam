<template>
<div :class="{ 'nav-bar': true, sticky: stickied }">
    <div class="container">
        <div class="nav-left">
            <ul>
                <li><router-link :to="{ name: 'home' }">Home</router-link></li>
                <li><router-link :to="{ name: 'about' }">About</router-link></li>
                <li><router-link :to="{ name: 'services' }">Services</router-link></li>
            </ul>
        </div>
        <div class="brand">
            <h1 :class="{ sticky: stickied }" @click="$router.push({ name: 'home' })">[ DanTam Beauty ]</h1>
            <!-- <img src="@/assets/logo-1x.png" alt="main logo" /> -->
        </div>
        <div class="nav-right">
            <ul>
                <li><router-link :to="{ name: 'portfolio' }">Portfolio</router-link></li>
                <li><router-link :to="{ name: 'contactus' }">Contact</router-link></li>
                <li><router-link :to="{ name: 'blog' }">Contact</router-link></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            stickied: false
        }
    },
    methods: {
        scrollTo(anchor) {
            let target = document.getElementById(anchor)
            if (target) target.scrollIntoView(true)
        }
    },
    mounted() {
        let content = document.querySelector('#content')
        window.addEventListener('scroll', () => {
            if ( window.innerWidth > 992 && window.scrollY > 50) {
                content.style.paddingTop = '7rem'
                this.stickied = true 
            } else {
                content.style.paddingTop = 0
                this.stickied = false 
            }
        })
    }
}
</script>

<style lang="scss">

.nav-bar {
    display: flex;
    flex-direction: space-between;
    padding: 1rem 2rem;
    font-size: 1rem;
    letter-spacing: 0.05em;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
}

.nav-bar .container {
    padding: 0;
    justify-content: space-between;
}

.nav-bar.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    // box-shadow: 0.5px 0.5px 0.5px #888888;
    border-bottom: 1px solid var(--color-bg-gray);
    z-index: 10;
    padding: 0.5rem 2rem;
}

.nav-bar .brand > h1.sticky {
    font-size: 1.8rem ;
}


.nav-bar ul li {
   display: inline-block; 
   padding: 0 1.8vw;

   &:first-child {
       padding-left: 0;
   }
   &:last-child {
       padding-right: 0;
   }
}

.nav-bar .brand {
    z-index: 2;
    flex-basis: 0 0 100px;
    margin: 0 0.5rem;
    cursor: pointer;

    & h1 {
        font-family: 'Countryside', 'serif';
        // font-family: 'Countryside', 'serif';
        font-size: 2rem;
        // color: #ff9f80;
        color: var(--color-primary-darken);
        padding: 0;
        margin: 0;
        text-align: center;
        display: inline-block;
        line-height: 1.9;
        transition: font-size 0.3s;
        // letter-spacing: -0.1rem;

    }

    & img {
        width: 100%;
        height: 100%;
    }
}

.nav-bar a {
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #fff;
    position: relative;

    &:hover:after {
        width: 100%;
    }
    
    &:after {
        position: absolute;
        content: '';
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--color-primary);
        transition: all 0.3s;
    }
}

.nav-bar .router-link-exact-active {
    padding-bottom: 0.4rem;
    border-bottom: 2px solid var(--color-primary);

    &:hover:after {
        content: none;
    }
}

.nav-bar a {
    cursor: pointer;
}
 
</style>