<template>
  <div style="margin:20px 10%">
     <v-md-preview  :text="text" ></v-md-preview>
  </div>
</template>

<script>
const text = `###### tags: \`vue\` \`vue-new\`
# Timer
每次用完後記得clear掉timer
盡量使用setTimeout(),setInterval少用
`
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
