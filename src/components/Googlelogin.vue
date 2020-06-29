<template>
  <div>
    <div class="row justify-content-center">
      <div
        v-if="!authorized"
        class="col-2"
      >
        <button
          type="button"
          class="Login"
          @click="login"
        >
          google登入
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    async login () {
      const googleUser = await this.$gAuth.signIn()
        .then(GoogleUser => {
          const profile = {
            name: GoogleUser.getBasicProfile().Bd,
            email: GoogleUser.getBasicProfile().Bu,
            src: GoogleUser.getBasicProfile().dL
          }
          this.$emit('profile', profile)
          this.$emit('islogin', true)
          return GoogleUser.getBasicProfile()
        })
        .catch(error => {
          console.error(error)
        })
      console.log(googleUser)
    }
  }
}
</script>

<style lang="scss" scoped>
.Login{
  padding: 10px;
  width: 80px;
  border-radius: 10px;
  color:azure;
  background: rgb(235, 93, 11);
}
</style>>
