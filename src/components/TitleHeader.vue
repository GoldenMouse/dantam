<template>
<div class="title-header">
        <h1>{{ title }}</h1>
        <div class="divider"></div>
        <p><slot></slot></p>
</div>
</template>

<script>
export default {
    name: 'TitleHeader',
    props: ['title']
}
</script>

<style lang="scss">
.title-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;

    & .divider {
        padding: 1rem 0;
    }
    & p {
        padding-top: 0;
        padding-bottom: 3rem;
        width: 60%;
        text-align: center;
        font-size: 1em;
    }
}
</style>