<template>

  <div class="membercard">

    <div class="member" style="width: 18rem;">
      <img src="../assets/david.jpg" class="card-img-top" alt="card1">
      <div class="card-body">
        <p class="card-text">David</p>
      </div>
      <a href="https://github.com/SimDav888"> <img class="gitimg" src="../assets/git.png" alt="git"> </a>
      <a href="https://simdav888.github.io/"> <img class="gitimg" src="../assets/user.png" alt="git"> </a>
    </div>

    <div class="member" style="width: 18rem;">

        <img src="../assets/hyelan.jpg" class="card-img-top" alt="card1">
        <div class="card-body">
          <p class="card-text">Hyelan(이혜란)</p><br>
        </div>
        <a href="https://github.com/hyelanlee"> <img class="gitimg" src="../assets/git.png" alt="git"> </a>&nbsp;&nbsp;
        <a href="https://hyelanlee.github.io/"> <img class="gitimg" src="../assets/user.png" alt="git"> </a>

    </div>

    <div class="member" style="width: 18rem;">
      <img src="../assets/boram.jpg" class="card-img-top" alt="card1">
      <div class="card-body">
        <p class="card-text">Boram(허보람)</p>
      </div>
      <a href="https://github.com/1shadowQ"> <img class="gitimg" src="../assets/git.png" alt="git"> </a>
    </div>

  </div>

</template>

<script>

export default {
  name: 'TheMember',
  components: { }
}

</script>

<style scoped>
.membercard{
  display: inline-flex;
  justify-content: space-around;
}
.member{
  margin:20px;
  border-radius: 10px;
}
.member img{
  width:230px;
  height: 300px;
  border-radius: 20px;
}
.card-img-top{
height: 320px;
}
.member .card-body{
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.member .card-text{
  font-size:20px;
  font-weight: bold;
  margin:0;
}
.member .gitimg{
  width:40px;
  height: 40px;
}

</style>
