<template>
  <div style="margin:20px 10%">
    <v-md-preview
      :text="text"
      height="100%"
    />
  </div>
</template>

<script>
const text = `###### tags: \`css\`
# GRID 排版
## 基本原理
> 外層下 display:grid;
> grid-template-columns分區塊寬度,若要平均分可用 fr ＊ 數量做區分
> grid-template-rows同理
> grid-gap 分隔間距

### 使用網格做排版
> grid-template-columns：網格區塊寬度
grid-template-rows：網格區塊高度
grid-template-areas：網格區塊名稱
grid-column-gap：網格區塊左右間距
grid-row-gap：網格區塊上下間距
grid-column：指定網格左右的位置，ex:＜start-line(起)＞ / ＜end-line(尾)＞ | span＜value＞
grid-row：指定網格上下的位置，ex:＜start-line(起)＞ / ＜end-line(尾)＞ | span＜value


### 網格排版達到RWD效果
\`\`\`  html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
\`\`\`
css
\`\`\` css
.container {
        width: 100%;
        height: auto;
        display: grid;
        outline: 2px solid red;
        grid-gap: 5px;
}

 .item {
        height: 200px;
        background-image: url(https://fakeimg.pl/500x500/4a7949/?text=lalala);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
}

 @media screen and (max-width: 575px) {
        .container {
            grid-template-columns: 1fr ;
        }
}

 @media screen and (min-width: 576px) {
        .container {
            grid-template-columns: 1fr 1fr ;
        }
}

 @media screen and (min-width: 768px) {
        .container {
            grid-template-columns: 1fr 1fr 1fr ;
        }
}

 @media screen and (min-width: 992px) {
        .container {
            grid-template-columns: 1fr 1fr 1fr 1fr ;
        }
}
\`\`\`
![](https://i.imgur.com/4VRKz2f.gif)

## 用法2
### grid-template-areas 做排版
\`\`\` html
<div class="container">
    <div class="aa"></div>
    <div class="bb"></div>
    <div class="cc"></div>
</div>
\`\`\`
\`\`\` css
 .container {
        width: 100%;
        height: 500px;
        outline: 2px solid red;
        display: grid;
        grid-gap: 5px;
        grid-template-rows: 0.33fr 0.33fr 0.33fr;
        grid-template-columns: 0.33fr 0.33fr 0.33fr;
        grid-template-areas:
            "AREA1 AREA1 AREA3"
            "AREA2 AREA2 AREA2"
            ". . .";
}

.aa {
        grid-area: AREA1;
        background: red;
}
.bb{
        grid-area: AREA2;
        background: green;
}
.cc{
        grid-area: AREA3;
        background: blue;
}
\`\`\`

![](https://i.imgur.com/v3Ca8Dn.png)
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
