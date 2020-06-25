<template>
  <div style="margin:20px 10%">
    <v-md-preview :text="text" />
  </div>
</template>

<script>
const text = `###### tags: \`vue\`
# vue 常用套件
## eslint-plugin-vue
#### 透過 Vue CLI 安裝 eslint-plugin-vue
\`\`\`
$ vue add @vue/cli-plugin-eslint
\`\`\`

#### 選擇ESLint 設定檔，
根據團隊或自己撰寫 JavaScript 的習慣去選擇，舉例來說這裡選擇 Standard（也就是 Standard JS 的風格規範）

![](https://i.imgur.com/04wV6sf.png)

接著會進一步詢問有沒有需要額外功能
![](https://i.imgur.com/yXmaGMt.png)

#### 設定 eslint 並修改程式碼，建立 eslint 設定檔
由於在 Vue Style Guide 中針對不同撰寫風格有不同的重要程度，透過 eslint 的設定檔可以選擇這個專案想要使用的建議程度。
先在根目錄的地方建立 .eslintrc.js 檔，在這支檔案可以根據你的需求進行設定：
![](https://i.imgur.com/Y0CzUI9.png)
![](https://i.imgur.com/sBkpTKo.png)
簡單來說，plugin:vue/recommended 會套用幾乎所有在 Vue Style Guide 中的建議，因此會使用到最多規則，也最不用自己動腦調整，其次是 plugin:vue/strongly-recommended，如果你希望受到 Vue Style Guide 的規範最少，則可以選 plugin:vue/base。
#### 可參考 https://pjchender.blogspot.com/2019/07/vue-vue-style-guide-eslint-plugin-vue.html

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
