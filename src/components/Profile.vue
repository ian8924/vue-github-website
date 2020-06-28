<template>
  <div class="hello">
    <img
      v-show="profile.name"
      :src="profilePicture"
      alt="profile"
      class="profile-picture"
    >
    <!-- eslint-disable-next-line vue/no-v-html -->
    <h1 v-html="msg" />
  </div>
</template>

<script>
export default {
  name: 'Hello',
  // eslint-disable-next-line vue/require-prop-types
  props: ['profile'],
  computed: {
    msg () {
      if (this.profile.name) {
        return `Welcome <b><i> ${this.profile.name} </i></b> to Vue.js App`
      } else {
        return 'Login Facebook to Enjoy the App'
      }
    },
    profilePicture () {
      return (this.profile.id) ? `https://graph.facebook.com/${this.profile.id}/picture?width=300` : '/static/man.gif'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.profile-picture {
  width: 150px;
  border-radius: 75px;
}
</style>
