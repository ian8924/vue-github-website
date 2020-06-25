<template>
  <div style="margin:20px 10%">
    <v-md-preview :text="text" />
  </div>
</template>

<script>
const text = `###### tags: \`vue\` \`vue-new\`
# router
## beforeEach
router.js
每個頁面進入前判斷
\`\`\`  js
//每個頁面進入前判斷是否登入
router.beforeEach(async(to, from, next) => {
   if(to.meta.auth){
        if(!data.login){
            console.log('驗證失敗');
            return next("/");
        }
   }
   return next("");

})

//routes設置
routes:[
 {
     path:'/advance',
     name:'advance',
     component:advance,
     meta:{ auth:true }
 }
]
\`\`\`
## beforeEnter
router.js
單一頁面判斷來源
\`\`\` js
//routes設置
routes:[
 {
     path:'/advance',
     name:'advance',
     component:advance,
     meta:{ auth:true },
     beforeEnter(to ,from, next){
       if(from.path==="/start"){
          return next("/")
       }
       return next()
     }
 }
]

\`\`\`
## beforeRouteEnter beforeRouteUpdate beforeRouteLeave
個別component內的設置
\`\`\`
beforeRouteEnter（to, from, next){
     // beforeEnter前最後的判斷
},
beforeRouteUpdate（to, from, next){
    // query string 值有改變時
},
beforeRouteLeave（to, from, next){
    // 常使用在表單尚未填寫完成時
}

\`\`\``
export default {
  data () {
    return {
      text
    }
  }
}
</script>

<style>

</style>
