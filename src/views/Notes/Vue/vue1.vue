<template>
  <div>
     <v-md-preview  :text="text" ></v-md-preview>
  </div>
</template>

<script>
const text = `###### tags: \`vue\`
# vue 環境建置
## 方法一
     npm install  -g vue-cli
     vue list
    //查看官方提供之模板
     vue init webpack <專案名稱>
## 方法二
> 先確認是否已安裝 vue-cli
> vue --version
> yarn global add @vue/cli

\`\`\`
vue ui   // 開啟ui介面新增專案
\`\`\`
![](https://i.imgur.com/NrU02L1.png)

## 啟動專案
> npm run dev`
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
