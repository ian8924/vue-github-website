<template>
  <div style="padding-right:20%">
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
import { db } from '@/firebase'
import moment from 'moment'
const chineseRef = db.ref('messages')
export default {
  data () {
    return {
      districts: [],
      inputValue: '',
      name: ''
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
  background-color: rgb(185, 219, 164);
  height: 95vh;
  padding-bottom: 20vh;
  overflow-y: auto;
  overflow-x: hidden;
 }
 /* #chatroom1{ */
 /* } */
</style>
