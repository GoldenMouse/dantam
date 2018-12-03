<template>
<div class="home">
    
    <MainHero/>

</div>
</template>

<script>
import MainHero from '@/components/MainHero'

export default {
  name: 'home',
  components: {
    MainHero,
  },
  methods: {
      clicker() {
      }
  },
}
</script>

<style lang="scss">
.home {
    display: flex;
    flex-direction: column;

    & .main-hero {
        flex: 1 1 auto;
    }

    & .filler {
        background-color: lightblue;
        flex: 1;
    }
}

</style>