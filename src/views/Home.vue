<template>
  <div class="home">
    <vue-typed-js :strings="['Hello', 'hey 1234']" :typeSpeed="200" :loop="true" :backSpeed="10">
      <h2 class="typing"></h2>
    </vue-typed-js>
    <vue-typed-js :strings="['Hello12121212', 'hey 1234']" :typeSpeed="200" :loop="true" :backSpeed="10">
      <h2 class="typing"></h2>
    </vue-typed-js>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
