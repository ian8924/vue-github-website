<template>
  <div class="container">
    <Profile :profile="profile" />
    <div class="row justify-content-center">
      <div
        v-if="!authorized"
        class="col-2"
      >
        <button
          type="button"
          class="FBLogin"
          @click="login"
        >
          facebook登入
        </button>
      </div>
      <div
        v-else
        class="col-2"
      >
        <button
          type="button"
          class="FBLogout"
          @click="logout"
        >
          登出
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/application.js'
import Profile from './Profile'
export default {
  name: 'FBlogin',
  components: {
    Profile
  },
  data () {
    return {
      profile: {},
      authorized: false
    }
  },
  mounted () {
    const vm = this
    // facebook 初始化
    window.fbAsyncInit = function () {
      // eslint-disable-next-line no-undef
      FB.init({
        appId: '1346557768848626',
        cookie: true,
        xfbml: true,
        version: 'v7.0'
      })
      // eslint-disable-next-line no-undef
      FB.AppEvents.logPageView()
      // Get FB Login Status
      // eslint-disable-next-line no-undef
      FB.getLoginStatus(response => {
        vm.statusChangeCallback(response)
      })
    }
  },
  methods: {
    // 取得個人資料
    getProfile () {
      // eslint-disable-next-line no-undef
      FB.api('/me?fields=name,id,email', response => {
        this.$set(this, 'profile', response)
        this.$emit('profile', response)
      })
    },
    // fb login
    login () {
      // eslint-disable-next-line no-undef
      FB.login(response => {
        this.statusChangeCallback(response)
      }, {
        scope: 'email, public_profile',
        return_scopes: true
      })
    },
    // fb logout
    logout () {
      // eslint-disable-next-line no-undef
      FB.logout((response) => {
        this.statusChangeCallback(response)
      })
    },
    statusChangeCallback (response) {
      if (response.status === 'connected') {
        this.authorized = true
        this.getProfile()
      } else if (response.status === 'not_authorized') {
        this.authorized = false
      } else if (response.status === 'unknown') {
        this.profile = {}
        this.authorized = false
      } else {
        this.authorized = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.FBLogin{
  padding: 10px;
  border-radius: 10px;
  color:azure;
  background: rgb(43, 122, 226);
}
.FBLogout{
  padding: 10px;
  border-radius: 10px;
  color:azure;
  background: rgb(155, 151, 151);
}
</style>>
