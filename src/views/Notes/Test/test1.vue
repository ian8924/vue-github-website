<template>
  <div style="margin:20px 10%">
    <v-md-preview :text="text" />
  </div>
</template>

<script>
const text = `###### tags: \`自動化測試\`
# Cypress


依照使用者的操作流程模擬出來的測試工具,好用的E2E測試工具


#### 範例

\`\`\` js
describe('下單流程測試', () => {
  it('登入測試', () => {
    // 到首頁
    cy.visit(\`\${modeURL}\`)
    // 到登入頁
    cy.visit(\`\${modeURL}/signin\`)
    // 填入帳號密碼
    cy.get('#phone').type('0961117647')
    cy.get('#Password').type('12345678')
    // 填入驗證碼
    cy.get('input[name=captcha]').type('1111')
    // 登入按鈕
    cy.get('div.col-6.text-right > div > button').click()
  })
})
\`\`\`


#### 介面
##### 選擇測試案例
![](https://i.imgur.com/AY0BIRF.png)



##### 模擬測試case
![](https://i.imgur.com/rEFltUe.png)
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
