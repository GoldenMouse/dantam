<template>
<footer ref="footer" class="footer">
    <div class="container">
        <h4><i class="far fa-copyright"></i> 2018 Privacy Policy</h4>
        <social/>
    </div>
</footer>
</template>

<script>
export default {
    name: 'Footer',
    components: {
    }
}
</script>

<script lang="scss">
footer {
    display: flex;
    align-items: center;
    background-color: var(--color-bg-gray);
    padding: 0.5rem;
    
    & > .container {
        display: flex;
        justify-content: space-between;
    }

    & h4 {
        margin: 0 auto;
        transform: translateX(25%);
        color: var(--font-color-light);
        font-weight: 400;

        & i {
            color: var(--font-color-light);
        }
    }

    & .social {
        & a {
            color: rgba(21, 21, 21, 0.3);
            padding: 0 0.8rem;

            &:hover {
                color: white;
            }
        }

        & ul {
            display: flex;
        }
    } 
}
</script>