<template>
<div class="blog">
    <TitleHeader title="Blog"></TitleHeader>

    <div class="container">
        <img src="@/assets/svg/coming-soon.svg" alt="brush"/>
        <h3>Coming soon</h3>
    </div>

</div>

</template>

<script>
import TitleHeader from '@/components/TitleHeader'

export default {
    name: 'Blog',
    components: {
        TitleHeader,
    }
}
</script>

<style lang="scss">
.blog {
    img {
        display: block;
        margin: 0 auto;
        width: 200px;
        height: auto;
        padding-bottom: 2rem;
    }

    .container {
        flex-direction: column;
    }
}
</style>