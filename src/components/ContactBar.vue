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

<style lang="scss" scoped>

.contact-bar {
    background-color: var(--color-primary);
}

.container {
     padding: 0.7rem 0;
}

li {
    display: inline-block;
    padding: 0 0.8rem;
}


.contact-info {
    font-size: 14px;
    display: flex;

    & > div {
        margin-right: 5rem;

        & span:first-child {
            font-weight: 700;
        }
    }

    a {
        color: var(--font-color);

        &:hover {
            color: white;
        }
    }
} 

.social {
    margin-left: auto;

    & a {
        color: rgba(21, 21, 21, 0.3);

        &:hover {
            color: white;
        }
    }
} 
</style>