<template>
  <div class="home">
    <ContactBar/> 
    <NavBar/> 
    <MainHero/>
  </div>
</template>

<script>
import ContactBar from '@/components/ContactBar'
import NavBar from '@/components/NavBar'
import MainHero from '@/components/MainHero'

export default {
  name: 'home',
  components: {
    ContactBar,
    NavBar,
    MainHero
  }
}
</script>
