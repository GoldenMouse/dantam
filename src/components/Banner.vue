<template>
<div class="banner">
    <h1>Gallery</h1>
</div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style lang="scss">
.banner {
    background: url(../assets/banner_1920x740.jpg) no-repeat center;
    padding: 5rem;

    & h1 {
        text-align: center;
        font-weight: 700;
    }
}

</style>