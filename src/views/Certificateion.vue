<template>
  <section class="py-5">
    <div class="container my-5" id="certification">
      <div class="cardbox">

        <div class="card" >
          <img src="../assets/certification1.jpg" class="card-img-top" alt="수료증">
          <div class="card-body">
            <p class="card-text"> Java 스마트융합 풀스택개발 </p>
          </div>
        </div>

        <div class="card" >
          <img src="../assets/certification2.jpg" class="card-img-top" alt="수료증">
          <div class="card-body">
            <p class="card-text"> 개근상 <br>풀스택개발 과정</p>
          </div>
        </div>

        <div class="card" >
          <img src="../assets/certification3.jpg" class="card-img-top" alt="수료증">
          <div class="card-body">
            <p class="card-text">국가직무능력표준(NCS)기반 <br>교육훈련과정 이수증</p>
          </div>
        </div>

        <div class="card" >
          <img src="../assets/certification1.jpg" class="card-img-top" alt="수료증">
          <div class="card-body">
            <p class="card-text">Java 스마트융합 풀스택개발</p>
          </div>
        </div>

        <div class="card" >
          <img src="../assets/certification1.jpg" class="card-img-top" alt="수료증">
          <div class="card-body">
            <p class="card-text">Java 스마트융합 풀스택개발</p>
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
  width: 400px;
  min-width: 250px;
  border: none;
  margin: 10px;
}
.card-text{
  text-align: center;
}
</style>
