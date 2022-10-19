<template>

  <section class="py-5" id="portfolio">

    <div class="py-5 bg-dark title">
        <div class="container">
          <h1 class="m-0 text-center text-white">Portfolio </h1>
        </div>
    </div>

    <div class="container my-5" >
      <div class="row justify-content-center">
        <div class="shadow-lg p-3 mb-5 bg-body rounded">
          <h1>1. 팀프로젝트 이름 : Gachi++ (같이)</h1>
          <img src="../assets/Logo1.png" alt="로고"><br>
          <a href="http://15.164.139.247:9091/"> 바로가기</a><br><br>
          <p>
            가치++는 누구든지 시간과 노력을 들여 자신이 정한 목표를 이룰 수 있도록 도와주는 소셜 네트워크 입니다.<br>
        가치는 우리말 '같이'의 소리나는 대로 쓴 것으로 '같이 함께하다' 라는 의미가 담겨있습니다.<br>
        ++는 개인의 목표가 우리의 목표가 되어 더 큰 가치 즉 Value를 만들어 낼 수 있다는 의미를 함축하고 있습니다.<br>
        누구든지 Gachi++의 회원이 될 수 있고 누구나 내가 원하는 목표를 위한 그룹을 만들 수 있고 가입할 수 있습니다.<br>
        우리는 그룹 안에서 자유롭게 질문하고 답할 수 있습니다. 그룹의 멤버 중에서 자신의 목표를 이룬 사람이 있다면 그 내용은 그룹의 모두에게 알려질 수 있고,<br>
        우리의 목표를 더욱 다지는 동기부여의 역할을 할 것입니다.<br>
          </p> <br><br><br><br>

          <h1>2. 팀프로젝트 페이지 소개</h1><br>

            <Portcard1/>
            <Portcard2/>
            <Portcard3/>

            <Portcard4/>
            <Portcard5/>
            <Portcard6/>

            <Portcard7/>
            <Portcard8/>
            <Portcard9/>

        </div>
      </div>
    </div>
  </section>

</template>

<script>
import Portcard1 from '../components/portcard1.vue'
import Portcard2 from '@/components/portcard2.vue'
import Portcard3 from '@/components/portcard3.vue'
import Portcard4 from '@/components/portcard4.vue'
import Portcard5 from '@/components/portcard5.vue'
import Portcard6 from '@/components/portcard6.vue'
import Portcard7 from '@/components/portcard7.vue'
import Portcard8 from '@/components/portcard8.vue'
import Portcard9 from '@/components/portcard9.vue'

export default {
  name: 'MyTeam',
  components: { Portcard1, Portcard2, Portcard3, Portcard4, Portcard5, Portcard6, Portcard7, Portcard8, Portcard9 }
}

</script>

<style>

.shadow-lg{
  text-align: center;
}

</style>
