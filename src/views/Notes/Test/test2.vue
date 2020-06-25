<template>
  <div style="margin:20px 10%">
    <v-md-preview :text="text" />
  </div>
</template>

<script>
const text = `######  tags: \`自動化測試\`
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
