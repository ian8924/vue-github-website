<template>
  <div style="margin:20px 10%">
    <v-md-preview :text="text" />
  </div>
</template>

<script>
const text = `
######  tags: \`自動化測試\`
前端的測試常見的有兩大類別：
1. **Unit Test**：中文稱為單元測試，是以一個行為進行測試，可驗證運行是否符合結果。
2. **E2E Test**：直接模擬使用者在瀏覽器上的行為做測試

# Jest
單元測試的工具 , Vue 的 Cli 中也是可做為預設的單元測試選項
使用 yarn 安装 Jest︰
\`\`\`
yarn add --dev jest
\`\`\`
或 npm
\`\`\`
npm install --save-dev jest
\`\`\`

基本配置

建一個 sum.js
\`\`\`  jsx
function sum(a, b) {
  return a + b;
}
module.exports = sum;
\`\`\`

建 sum.test.js
\`\`\` jsx
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
\`\`\`

paskage.json 添加
\`\`\` js
{
  "scripts": {
    "test": "jest"
  }
}
\`\`\`

**ps**: 執行若是出現 *TypeError: environment.teardown is not a function* , 須先砍掉 node_module , package.lock , yarn.lock, 重新 yarn install ,npm install 即可解決


## Component

最重要的角色莫過於一個一個組件了，因此正式開始測試前，我們必須先透過方法，渲染出組件。
首先先簡單創立一個 Component 稱為 UserForm。UserForm 的內容為以下：
\`\`\`  javascript
<template>
  <form @submit.prevent="submit">
    <input type="text" v-model="id" />
    <button type="submit">{{ text }}</button>
  </form>
</template>

<script>
export default {
  name: "UserForm",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      id: ""
    };
  },
  methods: {
    submit() {
      this.$emit("submit", { id: this.id });
    }
  }
};
<\\/script>
\`\`\`

此組件內容為一個輸入框，用以接收 id 資料。以及一個按鈕，按鈕的文字來自 Props text。
接下來以 UserForm 為例，有兩個方式可以渲染它。

1. mount
2. shallowMount

### mount 與 shallowMount 差異處
Vue Component 常常會有子父層關係，使用 mount 會真實將所有子層渲染出來；shallowMount 則只渲染該組件，不渲染子層們。
假設於 views 當中的 home，渲染 UserForm 組件，並分別使用 mount 及 shallowMount 印出 html。

![](https://i.imgur.com/A15ob8q.png)

可以發現使用 shallowMount 渲染出來的 UserForm 組件並不完整，子組件被 stub 替換掉了，成了一個假的組件。

當只想測試特定組件的內容時，shallowMount 就會優於 mount。

## Prop
Props 的資料被當成 mount 或 shallowMount 的第二個參數傳入，例如：
![](https://i.imgur.com/LupnVwD.png)

接著需要測試 Props 進來的文字，是否被正確渲染在 button 按鈕上。必須先抓到 button 元素，再抓取文字測試。

抓取元素可以用 find 方法，find 方法接受常用的標籤選擇器、類別與 id 選擇器、屬性選擇器、偽類選擇器等。

以上述為例，可以簡單使用標籤選擇器 wrapperUserForm.find("button") 。接著使用 text( ) 方法，抓取元素文字內容。

完整測試如下：
\`\`\` javascript
import { mount } from "@vue/test-utils";
import UserForm from "@/components/UserForm.vue";

test("測試 props 資料_按鈕文字", () => {
  const propstext = "送出";
  const wrapperUserForm = mount(UserForm, {
    propsData: {
      text: "送出"
    }
  });
  expect(wrapperUserForm.find("button").text()).toBe(propstext);
});
\`\`\` `

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
