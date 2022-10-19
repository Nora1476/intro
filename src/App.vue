<template>

    <!-- Responsive navbar-->
    <Navbar/>

    <!-- Header - set the background image for the header in the line below-->
    <Header/>

    <!-- Content section1-->
    <Intro/>

  <div class="stickybox">
    <Certification/>
    <Portfolio/>
    <Team/>

    <div class="stickytop">
      <a href="#" > <img src="./assets/top.png" alt="상단으로가기" style="width:70px;"></a>
    </div>

    <footer class="py-5 bg-dark">
        <div class="container"><p class="m-0 text-center text-white">Copyright &copy; My Website 2022</p></div>
    </footer>

  </div>

</template>

<script>
import Navbar from './views/Navbar.vue'
import Header from './views/Header.vue'
import Intro from './views/Intro.vue'
import Certification from './views/Certificateion.vue'
import Portfolio from './views/Portfolio.vue'
import Team from './views/Team.vue'

export default {
  components: { Navbar, Header, Intro, Certification, Portfolio, Team }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Gowun Dodum', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.stickytop{
  display: inline;
  float: right;
  position:sticky;
  bottom:60px;
  right:10px;
  border-radius: 50%;
  background: rgba(199, 199, 199, 0.3)
}

</style>
