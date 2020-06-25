<template>
  <div class="home">
    <!-- <vue-typed-js :strings="['Hello12121212', 'hey 1234']" :typeSpeed="200" :loop="true" :backSpeed="10">
      <h2 class="typing"></h2>
    </vue-typed-js> -->
    <div class="background-img">
      <div style="position:absolute;top:20%;left:45%">
        <vue-typed-js
          :strings="['Hello', `I'am Ian`]"
          :type-speed="200"
          :loop="true"
          :back-speed="10"
        >
          <h1
            class="typing"
            style="color:rgb(185, 50, 50);font-family: 'Pacifico', cursive;"
          />
        </vue-typed-js>
      </div>
      <img
        src="../assets/bg.jpg"
        alt=""
        width="100%"
        height="100%"
      >
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style >
.background-img{
  width: 100%;
  height: auto;
}
.typed-cursor{
  font-size: 30px;
  color:rgb(185, 50, 50)
}
</style>
