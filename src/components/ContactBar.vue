<template>
<div class="contact-bar">
    <div class="container">
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
export default {
    name: 'ContactBar'
}
</script>

<style lang="scss">

.contact-bar {
    background-color: var(--color-primary);
    padding: 0 2rem;
    transition: all 0.2s;
}

.contact-bar .container {
     padding: 0.7rem 0;
     justify-content: flex-start;
     position: relative;
}

.contact-bar li {
    display: inline-block;
}


.contact-bar .contact-info {
    font-size: 14px;
    display: flex;

    & > div {

        & span:first-child {
            font-weight: 700;
        }
    }

    & a {
        color: var(--font-color);

        &:hover {
            color: white;
        }
    }
} 

.contact-bar .telephone {
    margin-right: 5rem;
}

.contact-bar .social {
    position: absolute;
    right: 0;

    & a {
        color: rgba(21, 21, 21, 0.3);
        padding: 0 0.8rem;

        &:hover {
            color: white;
        }
    }
} 
</style>