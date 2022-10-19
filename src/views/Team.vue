
<template>

  <section class="py-5" id="portfolio" >

    <div class="py-5 bg-dark title" id="team">
          <div class="container">
            <h1 class="m-0 text-center text-white">My Team (NoRaBoDa)</h1>
          </div>
      </div>

      <div class="container my-5" >
          <div class="row justify-content-center">
            <div class="shadow-lg p-3 mb-5 bg-body rounded">

              <p>
                Our Team name comes from member's name. <br>
                nora(bonghui), hyelan, boram, david. <br>
                Bring a one word each member's name. nolaboda sounds like enjoying do something in Korean.
              </p>
              <p>
                팀명은 멤버 각자의 이름에서 한 글자씩 따왔습니다.<br>
                '놀아보다'라는 발음과 비슷하게 놀이하듯 즐겁게 때론 진지하게 프로젝트를 준비하였습니다. <br><br>
              </p>

              <div class="member">
                <Member/>
              </div>

            </div>
          </div>
      </div>
  </section>

  </template>
<script>
import Member from '@/components/Member.vue'

export default {
  name: 'MyTeam',
  components: { Member }
}

</script>

<style scoped>
.shadow-lg{
  text-align: center;
}
</style>
