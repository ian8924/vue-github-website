<template>
  <div style="margin:20px 10%">
    <v-md-preview :text="text" />
  </div>
</template>

<script>
const text = `###### tags: \`vue\`
# vue指令
* v-html
* v-text
* v-bind

---
* v-on :
\`\`\`
語法：v-on:click="say"
簡寫：@click="say"
\`\`\`



---
* v-if:
\`\`\`
false不會渲染
\`\`\`
* v-show:
\`\`\`
false會渲染 display:none
\`\`\`
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
