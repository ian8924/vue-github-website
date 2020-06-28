/* eslint-disable no-undef */
<template>
  <div style="padding-right:20%">
    <Profile :profile="profile" />
    <div class="container">
      <div class="row justify-content-center">
        <div
          v-if="!authorized"
          class="col-2"
        >
          <button
            type="button"
            class="btn btn-outline-success"
            @click="login"
          >
            Login
          </button>
        </div>
        <div
          v-else
          class="col-2"
        >
          <button
            type="button"
            class="btn btn-outline-success"
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    <v-text-field
      v-model="name"
      :counter="10"
      label="稱號"
      required
    />

    <div
      id="chatroom1"
      class="chatroom"
    >
      <div
        v-for="(item,index) in districts"
        :key="index"
        :class="{anotherOne:item.name!==name,isMe:item.name===name}"
      >
        <div
          v-if="item.name!==name"
          style="color:green"
        >
          {{ item.name }}
        </div>
        <span style="color:red">
          {{ changeFormat(item.time) }}
        </span>
        <v-chip
          class="ma-2"
          small
        >
          {{ item.message }}
        </v-chip>
      </div>
    </div>
    <div class="flex-bottom">
      <input
        v-model="inputValue"
        type="text"
        class="input-1"
      >
      <button
        class="btn-1"
        @click="sendMessage"
      >
        send
      </button>
    </div>
  </div>
</template>

<script>
import Profile from '@/components/Profile'
import { db } from '@/firebase'
import moment from 'moment'
const chineseRef = db.ref('messages')
export default {
  components: {
    Profile
  },
  data () {
    return {
      districts: [],
      inputValue: '',
      name: '',
      profile: {},
      authorized: false
    }
  },
  mounted () {
    chineseRef.on('value', snapshot => {
      var data = snapshot.val()
      const messageData = data
        ? Object.keys(data).map(key => ({ id: key, ...data[key] }))
        : null
      this.districts = Object.assign(messageData)
      const objDiv = document.querySelector('#chatroom1')
      objDiv.scrollTop = objDiv.scrollHeight + 100
    })
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
        this.statusChangeCallback(response)
      })
    }
  },
  methods: {
    // 傳送訊息
    sendMessage () {
      if (!this.name) {
        alert('請輸入稱號')
        return
      }
      if (!this.inputValue) {
        return
      }
      const req = {
        message: this.inputValue,
        name: this.name,
        time: moment().valueOf()
      }
      chineseRef.push(req)
      this.inputValue = ''
    },
    // 轉換時間格式
    changeFormat (val) {
      return moment(val).format('HH:mm:ss')
    },
    // 取得個人資料
    getProfile () {
      const vm = this
      // eslint-disable-next-line no-undef
      FB.api('/me?fields=name,id,email', function (response) {
        vm.$set(vm, 'profile', response)
        console.log(vm.profile)
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
<style scope>
.anotherOne{
  text-align: left;
  margin-top:10px
}
.isMe{
  text-align: right;
  margin-top:30px
}
.messageBox{
  color: black;
  background: rgb(224, 221, 221);
  border-radius: 10px;
  border: solid gray 1px;
  padding: 3px;
  margin: 10px 0 5px 0;
  justify-content: right;
}
.flex-bottom{
  width: 100%;
  position: fixed;
  bottom: 0;
 }
 .flex-top{
  width: 100%;
  position: fixed;
  top: 0;
 }
 .input-1{
   height: 5vh;
   width: 80%
 }
 .btn-1{
   width:5vh;
   height: 30px;
   background:rgb(153, 151, 151)
 }
 .chatroom{
  background-color: rgb(152, 156, 150);
  height: 95vh;
  padding-bottom: 20vh;
  overflow-y: auto;
  overflow-x: hidden;
 }
</style>
