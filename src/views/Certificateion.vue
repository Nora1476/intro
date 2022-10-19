<template>

  <section class="py-5" id="certification">
    <div class="py-5 bg-dark title">
        <div class="container">
          <h1 class="m-0 text-center text-white">Certification</h1>
        </div>
    </div>
    <div class="container my-5" >
      <div class="cardbox">

        <div class="card" >
          <img src="../assets/certification1.jpg" class="card-img-top" alt="수료증">
          <div class="card-body">
            <p class="card-text"> Java 스마트융합 풀스택개발 </p>
          </div>
        </div>

        <div class="card" >
          <img src="../assets/certification2.jpg" class="card-img-top" alt="개근상">
          <div class="card-body">
            <p class="card-text"> 개근상 <br>풀스택개발 과정</p>
          </div>
        </div>

        <div class="card" >
          <img src="../assets/certification3.jpg" class="card-img-top" alt="NCS이수증">
          <div class="card-body">
            <p class="card-text">국가직무능력표준(NCS)기반 <br>교육훈련과정 이수증</p>
          </div>
        </div>

        <div class="card" >
          <img src="../assets/certification4.jpg" class="card-img-top" alt="컴활1급">
          <div class="card-body">
            <p class="card-text">컴퓨터활용능력 1급</p>
          </div>
        </div>

        <div class="card" >
          <img src="../assets/certification5.jpg" class="card-img-top" alt="토익">
          <div class="card-body">
            <p class="card-text">TOEIC 성적표</p>
          </div>
        </div>

        <div class="card" >
          <img src="../assets/certification6.jpg" class="card-img-top" alt="오픽">
          <div class="card-body">
            <p class="card-text">OPic 성적표</p>
          </div>
        </div>

        <div class="card" >
          <img src="../assets/certification7.png" class="card-img-top" alt="테솔">
          <div class="card-body">
            <p class="card-text">TESOL</p>
          </div>
        </div>

      </div>
    </div>
</section>
</template>

<script>

export default {
  name: 'NoraCertification',
  components: { }
}

</script>

<style scoped>

.title{

}
.cardbox{
  width:100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  overflow-x:scroll;
}

/*스크롤바 커스텀*/
.cardbox::-webkit-scrollbar{
  width:6px;
}

.cardbox::-webkit-scrollbar-thumb{
  height: 17%;
  background-color: rgb(100, 107, 107);
  border-radius: 10px;
}

.cardbox::-webkit-scrollbar-track{
  background-color: rgba(184, 187, 187, 0.33);
}

.card{
  width: 500px;
  min-width: 250px;
  border: none;
  margin: 10px;
}
.card-text{
  text-align: center;
  font-weight: bold;
}
</style>
