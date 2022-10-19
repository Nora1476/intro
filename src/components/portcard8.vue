<template>

<div class="card" style="width: 18rem;">
  <img src="../assets/card7.png" class="card-img-top" alt="card1">
  <div class="card-body">
    <p class="card-text">8. 나만의 목표등록 및 목표리스트, 아젠다</p>
  </div>
</div>

</template>

<script>

export default {
  name: 'PortCard',
  components: { }
}

</script>

<style scoped>
.card{
  display: inline-block;
  margin: 20px;
  border:none;
}
.card-img-top{
  height: 320px;
}
.card:hover{
  scale: 1.1;
}
.card-body{
  font-weight: bold;
  border: 1px solid rgba(0,0,0,0.2);
}
</style>
