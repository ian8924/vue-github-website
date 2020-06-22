<template>
  <div>
     <v-md-editor v-model="text" height="100%"></v-md-editor>
  </div>
</template>

<script>
const text = `###### tags: \`javascript\`
# CORS觀念
[https://medium.com/d-d-mag/%E5%92%8C-cors-%E8%B7%9F-cookie-%E6%89%93%E4%BA%A4%E9%81%93-dd420ccc7399](http://)

## 前言
CORS 與 cookie 在前端是個蠻重要的問題，不過大多數在開發的時候，因為前後端的 domain 時常是相同的，所以很少去 care 這些問題。或者只要要求後端將 Access-Control-Allow-Origin: * 開好開滿就對了，很少去理解背後運作的機制。
針對這個問題，MDN 上其實有個非常詳盡的解說，所以這篇文章主要在於整理重點以及在實際操作上時常發生的問題。

## 同源政策（same-origin policy）
為了防止 javascript 在網頁上隨地撒野，同源政策規定了某些特定的資源、程式碼，必須在同源的情況下才可以存取。
什麼是同源呢？一份 document 的來源，由 protocol, host, port 來定義。也就是說如果文件 1 來自 [http://kalan.com](http://)，而文件 2 來自於 [https://kalan.com](http://) 他們就不算是同源；那如果是 subdomain 呢？像是 [https://api.foobar.com](http://) 跟[https://app.foobar.com](http://)。因為他們的 host 不同，所以也不算同一個 origin。

而有些資源是本來就能夠透過跨來源取得的：
\`\`\`
* <img />
* <video />, <audio />
* <iframe />：可以透過定義 header 來防止他人嵌入
* 透過 <link rel="stylesheet" href /> 載入的 CSS 腳本
* <script src="" /> 載入的 Javascript
\`\`\`

透過程式碼發出的跨來源請求則會受到同源政策的限制（如 Fetch, XHR）。

  很顯然地，這樣的政策太過嚴格了。如果都要限制在同源政策下的話，前後端開發會非常難以進行，也沒辦法用 XHR 的方式套用其他 SDK 的 API。也因此出現了 CORS（Cross-Origin Resource Sharing）的機制。很顯然地，這樣的政策太過嚴格了。如果都要限制在同源政策下的話，前後端開發會非常難以進行，也沒辦法用 XHR 的方式套用其他 SDK 的 API。也因此出現了 CORS（Cross-Origin Resource Sharing）的機制。

  ## CORS（Cross-Origin Resource Sharing）
很多人都覺得 CORS 是前端才需要具備的知識。不過 CORS 通常需要後端設定相關的 header，並且了解背後所具備的含義才有辦法正確運作。
那麼跨來源請求是怎麼運作的呢？
主要是由兩個 Header 來做相對的存取控制，Request 當中的 Origin 和 Response 中的 Access-Control-Allow-Origin。
只要發送請求時的 Origin 和回應的 header 中 Access-Control-Allow-Origin 的值相同，或是Access-Control-Allow-Origin: * （代表允許任何網域存取資源），此時就會放寬 CORS 的限制，允許存取跨域資源。
如果不符合 CORS policy 的話，會顯示下列訊息：
![](https://i.imgur.com/IgqSqlX.png)
如果你嘗試去讀取回傳的物件，還會得到 warning。

首先，我們如果按照提示所講的，將 fetch mode 改成 no-cors 會發生什麼事呢？的確，我們把惱人的錯誤訊息給處理掉了，但是情況似乎沒有比較好一點。

no-cors 並不是萬靈丹，就算使用了這個 mode，CORS 也不會因為這樣就打開大門，也就是你的請求並不會成功送出。也因此出現了 SyntaxError: Unexpected end of input 這個錯誤。這個 mode 通常是跟 service worker 搭配使用的。

從上面這個實驗當中我們可以得知，要解除 CORS 的封印只有一招，就是在伺服器端加上正確 Control-Access-Allow-Origin（host 必須跟 origin 相同或是 *）。

另外，CORS 這個機制只會運作在 javascript 送出 XHR 或 fetch 時，一般像是 curl 或 postman 並沒有這個機制，所以也因此常常在測試 API endpoint 時會忽略這項事情，導致前後端在測試 API 時有出入發生。
有些跨來源請求不會發生 preflight，而有些請求則會，MDN 上寫的條件蠻清楚的：

1. 必須是 GET, HEAD, POST 其中一種方法
2. 除了 user-agent 自動設置的 header 和特定的 header 之外，不包含其他 header。可接受的 headers
3. 若有 Content-Type（注意是 request header ，不是 response header），則必須是下列的值 application/x-www-form-encoded, text/plain, multipart/form-data

也就是說如果不滿足以上條件的話，就會發出 preflight 請求。

以下我們試著改變 **Content-Type** 為 **application/json** 來達成 preflight 的要件（不為 application/x-www-form-encoded, text/plain, multipart/form-data）。

## Preflight
所謂的 preflight 就是請求會先以 HTTP OPTION 的方式送去另外一個網域敲門，確認沒問題後才會送出真正的請求。一旦觸發了這個條件，要做的事情就會變得麻煩許多。
1. 必須加入一個 OPTIONS 的相同 api endpoint，並且設定 Access-Control-Allow-Origin 來符合 CORS 要件
2. 必須加入 Access-Control-Allow-Headers，且必須包含所有不在條件內 header，否則無法通過。

如果沒有通過 preflight check 的話，會得到錯誤訊息如下：
![](https://i.imgur.com/r0pF1J7.png)

或是你沒有在 OPTIONS 的回應標頭裡加上 Access-Control-Allow-Origin:
![](https://i.imgur.com/JrNnIbz.png)

如果成功的話，你會看到 network 裡頭有兩個請求，一個是 OPTIONS，另一個則是真正的請求。

![](https://i.imgur.com/ngCgsbE.png)

如果我們加上一個自製的 header 呢？根據 MDN 所定義的要件，也應該觸發 preflight 請求才對，我們加上一個 X-Access-Token 看看會發生什麼事。

\`\`\`
fetch('http://localhost:3001/trigger-preflight', {
  headers: { 'X-Access-Token': 'dontbeserious' }
})
  .then(res => res.json())
  .then(log);
\`\`\`
![](https://i.imgur.com/0K3d2uL.png)
的確無法通過 preflight，如果要通過的話，必須再把 X-Access-Token 加入 Access-Control-Allow-Headers 中。

## 附帶身份驗證的請求

cookie 並不能跨域傳遞，也就是說不同 origin 中的 cookie 沒辦法互相傳遞及存取，不然就天下大亂了。

不過如果你在 a 網域送出了 b 網域的請求，且 b 網域回傳了 cookie 的訊息，那麼在 a 網域會以 b 網域的形式儲存一份 cookie，如果沒有設定 withCredentials 或是 credentials: ‘include’ 的話，就算伺服器有回傳 Set-Cookie，一樣不會被寫入。像是下圖：

![](https://i.imgur.com/W3dVXWl.png)

在一般情況下如果再使用 b 網域的 API，cookie 是不會自動被送出去的。這個情況下，你必須在 XHR 設定 withCredentials 或是 fetch 的選項中設置 { credentials: 'include' }，因為這也是一個跨域請求，所以也必須遵照 CORS 要件加入 Access-Control-Allow-Origin

為了避免安全性的問題，瀏覽器還有規範 Access-Control-Allow-Origin 不能是 *。

![](https://i.imgur.com/iJNZ9vD.png)

不過光是這樣還不夠，瀏覽器會自動拒絕沒有 Access-Control-Allow-Credentials 的回應，也因此如果要能夠將身份訊息傳到跨網域的伺服器當中，必須額外加上 Access-Control-Allow-Credentials: true。如果都有設定成功，應該會像下圖這樣，在 Request Cookie 可以看到 cookie 被成功送出。

![](https://i.imgur.com/2annT5Y.png)
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
