<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item"><a class="nav-link active" aria-current="page" href="#intro">소개 /</a></li>
                  <li class="nav-item"><a class="nav-link" href="#certification">자격증 /</a></li>
                  <li class="nav-item"><a class="nav-link" href="#portfolio">포트폴리오소개 /</a></li>
                  <li class="nav-item"><a class="nav-link" href="#aboutme">더 알아보기</a></li>
              </ul>
          </div>
      </div>
    </nav>
</template>

<script>

export default {
  name: 'NavBar',
  components: { }
}

</script>

<style scoped>
li{
  font-size: 20px;
}
</style>
