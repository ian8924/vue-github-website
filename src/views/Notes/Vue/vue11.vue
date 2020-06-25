<template>
  <div style="margin:20px 10%">
    <v-md-preview :text="text" />
  </div>
</template>

<script>
const text = `###### tags: \`vue\` \`vue-new\`
#  資料綁定

## 單向綁定
\`\`\`  js
<children :value="value" />
\`\`\`
## 雙向綁定
\`\`\`  js
<children v-model="value" />
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
