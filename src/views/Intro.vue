<template>
  <section class="py-5" id="intro">
    <div class="py-5 bg-dark title">
      <div class="container">
        <h1 class="m-0 text-center text-white">Introduction</h1>
      </div>
    </div>

      <div class="container my-5" >
          <div class="row justify-content-center">
            <img src="../assets/quotation.png" alt="quotation" style="width:70px; margin-bottom: 50px;">
            <h1>여전히 열심히 살고 있구나.</h1>
            <img src="../assets/quotation2.png" alt="quotation" style="width:70px; margin-top: 10px;">
          </div>
          <br><br>
          <p>
            최근 오랜만에 연락이 온 친구에게 들은 말입니다.
            여행, 어학 공부, 자격증 취득, 운동 등 경험을 쌓으며 건강하게 살기 위해 꾸준히 하는 일이 몇 가지 있습니다.<br>
            <b>현재는 개발자라는 큰 목표를 가지고 6개월의 과정을 빠짐없이 출석하여 팀원들과 함께 결과물을 내었고, 수료 및 취업을 앞두고 있습니다.</b><br>
            제 이름은 조봉희입니다. 하지만 봉만이라 불리는 이유는 빠르진 않지만 꾸준히 하는 성격에 붙여진 별명입니다.
          </p>
      </div>

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="working">
              <img src="../assets/nora2.jpg" alt="working">
              <img src="../assets/nora1.jpg" alt="working" >
              <img src="../assets/nora4.png" alt="working">
            </div>
          </div>
          <div class="carousel-item">
            <div class="running">
              <img src="../assets/yoga.jpg" alt="running">
              <img src="../assets/yoga2.jpg" alt="running" >
              <img src="../assets/run1.jpg" alt="running">
              <img src="../assets/marathon.jpg" alt="running">
            </div>
          </div>
          <div class="carousel-item">
            <div class="hiking">
              <img src="../assets/hiking1.jpg" alt="hiking">
              <img src="../assets/hiking2.png" alt="hiking" >
              <img src="../assets/hiking3.jpg" alt="hiking" >
              <img src="../assets/hiking4.jpg" alt="hiking" >
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="shadow-lg p-3 mb-5 bg-body rounded" style="position:relative;">
        <div class="run">
          <img src="" alt="">
        </div>

        <div class="workout">

        </div>
      </div>
  </section>

</template>

<script>

export default {
  name: 'NoraIntroduction',
  components: { }
}

</script>

<style scoped>
.container{
  text-align: center;
}
.container p{
  font-size: 18px;
}
.row{
  display: inline;
}
h1{
  display: inline;
}

.hiking, .running, .working{
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
}
.hiking img, .running img, .working img{
  margin:10px;
  height: 300px;
}

</style>
