<template>
  <div style="margin:20px 10%">
    <v-md-preview :text="text" />
  </div>
</template>

<script>
const text = `###### tags:  \`vue\` \`vue-new\`
# watch運用
改變值之後的fuction,建議去改原始的data,而不是computed
\`\`\` js
watch:{
    "city":{
        immediate:true, //一開始時先觸發一次
        handler(newValue,oldValue){
            this.area="";
        }
    }
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
