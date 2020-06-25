<template>
  <div style="margin:20px 10%">
    <v-md-preview :text="text" />
  </div>
</template>

<script>
const text = `###### tags:\`vue\` \`vue-new\`
# Vue cli 環境變數
你可以替換你的項目根目錄中的下列文件來指定環境變量
\`\`\` js
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
\`\`\`
一個環境文件只包含環境變量的“鍵=值”對：
\`\`\` js
FOO=bar
VUE_APP_SECRET=secret
\`\`\`

![](https://i.imgur.com/VKu1VrZ.png)

目錄下的文件

![](https://i.imgur.com/jkUeSh4.png)

package.json

![](https://i.imgur.com/RJcV7rc.png)

.html中引入

![](https://i.imgur.com/lREOi2E.png)

.js中引入

![](https://i.imgur.com/CS61zCi.png)
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
