<template>
  <!-- Responsive navbar-->
  <Navbar/>

  <!-- Header - set the background image for the header in the line below-->
  <Header/>

  <!-- Content section1-->
  <Intro/>
  <Certification/>
  <AboutMe/>
  <Portfolio/>

  <footer class="py-5 bg-dark">
      <div class="container"><p class="m-0 text-center text-white">Copyright &copy; My Website 2022</p></div>
  </footer>

  <div class="stickytop">

  </div>
</template>

<script>
import Navbar from './views/Navbar.vue'
import Header from './views/Header.vue'
import Intro from './views/Intro.vue'
import Certification from './views/Certificateion.vue'
import AboutMe from './views/AboutMe.vue'
import Portfolio from './views/Portfolio.vue'

export default {
  components: { Navbar, Header, Intro, Certification, AboutMe, Portfolio }
}

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
