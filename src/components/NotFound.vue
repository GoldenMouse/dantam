<template>
<div class="not-found">
    <div class="container">
        <h1>Page not found!</h1>
    </div>
</div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style lang="scss">
.not-found {
    color: red;
    margin: 25vh;

    & h1 {
        text-align: center;
        width: 100%;
    }

}
</style>