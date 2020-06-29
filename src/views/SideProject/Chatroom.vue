<template>
  <div style="max-width:800px;margin:auto;padding-right:20px">
    <FBlogin @profile="changeLoginState" />
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
          class="name"
        >
          {{ item.name }}
        </div>
        <div
          v-else
          class="name"
        >
          我
        </div>
        <v-chip
          class="ma-2"
          small
        >
          {{ item.message }}
        </v-chip>
        <span class="time">
          {{ changeFormat(item.time) }}
        </span>
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
        :class="{'green':canSend,'gray':!canSend}"
        @click="sendMessage"
      >
        <i class="fas fa-arrow-circle-right" />
      </button>
    </div>
  </div>
</template>

<script>
import FBlogin from '@/components/FBlogin'
import { db } from '@/firebase'
import moment from 'moment'
const chineseRef = db.ref('messages')
export default {
  components: {
    FBlogin
  },
  data () {
    return {
      districts: [],
      inputValue: '',
      name: ''
    }
  },
  computed: {
    canSend () {
      return this.inputValue !== ''
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
    // FB登入
    changeLoginState (val) {
      this.name = val.name
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
  padding:10px 10px;
  width: 100%;
  position: sticky;
  height: 70px;
  bottom: 0;
  background: rgb(228, 225, 225);
 }
 .flex-top{
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
 }
 .input-1{
   background: rgb(128, 128, 128,0.5);
   border-radius: 30px;
   padding-left: 10px;
   height: 40px;
   width: 80%;
 }
 .btn-1{
   position: absolute;
   right:0;
   width: 15%;
   height: 40px;
   font-size: 25px;
   /* padding: 5px 35px; */
   color:white;
   margin-right:10px;
 }

 .green{
   background:rgb(26, 226, 69);
 }

 .gray{
     background: gray;
 }

 .chatroom{
  background-color: rgb(109, 171, 230);
  height: 95vh;
  padding-bottom: 20vh;
  overflow-y: auto;
  overflow-x: hidden;
 }

.name{
    color:white;
    padding-left:3px;
    margin: 0 10px;
}
.time{
    color:white;
    font-size: 8px;
    margin-top: 20px;
    margin-right: 20px;
}

</style>
