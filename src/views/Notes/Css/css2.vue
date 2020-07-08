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
# Sass/SCSS 入門
Sass（Syntactically Awesome StyleSheets）是一種 CSS 的擴充，是為 CSS 的超集合（透過編譯會 compiled 成傳統 CSS，讓瀏覽器可以閱讀）。使用 Sass 的出現是為了解決在大型專案時傳統 CSS 會遇到的重複、可維護性差等問題（新增了 nested rules, variables, mixins, selector inheritance 等特性）。讓開發者可以撰寫簡潔、富語意（expressive）、重複性佳（reusable）、可維護性佳和可延展性佳的 CSS 程式碼。

Sass 的語法分為新的 SCSS (Sassy CSS、Sass 3，檔案名稱為 *.scss) 和舊的 SASS（向 Haml取經，具備不使用大括弧格式、使用縮排，不能直接使用 CSS 語法、學習曲線較高等特性，檔案名稱為 *.sass）。由於新的 SCSS 語法是 CSS3 的超集合，所以傳統的 CSS3 檔案就算直接複製過來也不會出錯，學習曲線相對較緩，因此我們將使用 SCSS 語法

## 特性
### 1. Variables：變數可以用來儲存值，方便重複利用
有些時候 Variables，這時候若能使用變數儲存重複使用的值可以增加重用性。在 Sass 中我們使用 $ 來表示變數，變數的資料型態可以是 Numbers（可以有單位或無單位）、Strings、Booleans、null 值（視為空值），甚至可以使用 Lists、Maps 來。
變數的使用：
\`\`\` scss
$translucent-white: rgba(255,255,255,0.3);
p {
background-color: $translucent-white;
}
\`\`\`
Lists 可以空格或加逗號分隔屬性值：

\`\`\` scss
$font-style-2: Helvetica, Arial, sans-serif;
$standard-border: 4px solid black;

p {
border: $standard-border;
}
\`\`\`
\`\`\` scss
// maps key:value
$font-style-2: (key1: value1, key2: value2);
\`\`\`

### 2.Nesting：降低父元素重複性
轉譯前：

\`\`\` scss
.parent {
  color: blue;
  .child {
    font-size: 12px;
  }
}
\`\`\`
轉譯後：

\`\`\` sass
.parent {
  color: blue;
}

.parent .child {
    font-size: 12px;
}
\`\`\`
在 Nesting 中不僅只有 child selectors 可以使用，還可以使用在相同的 Properties 上：
\`\`\` sass
.parent {
  font : {
    family: Roboto, sans-serif;
    size: 12px;
    decoration: none;
  }
}
\`\`\`
轉譯後：

\`\`\` sass
.parent {
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-decoration: none;
}

\`\`\`
### 3.Mixins：降低 pseudo 元素撰寫的重複性，如：::before、::after、:hover，在 Sass 中使用 & 代表父元素

\`\`\` sass
.notecard{
  &:hover{
      @include transform (rotatey(-180deg));
    }
  }
\`\`\`
轉譯後：

\`\`\` sass
.notecard:hover {
  transform: rotatey(-180deg);
}
\`\`\`

重用群組的 CSS，例如跨瀏覽器的 prefix，使用 @include 加入群組：

\`\`\` sass
@mixin backface-visibility {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
}
.notecard {
  .front, .back {
    width: 100%;
    height: 100%;
    position: absolute;

    @include backface_visibility;
  }
}
\`\`\`
轉譯後：

\`\`\` sass
.notecard .front, .notecard .back {
  width: 100%;
  height: 100%;
  position: absolute;

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  -o-backface-visibility: hidden;
}
\`\`\`
@mixin 也可以透過 @include 使用參數，也可以使用預設值：

\`\`\` sass
@mixin backface-visibility($visibility:hidden) { //Add an argument
  backface-visibility: $visibility;
  -webkit-backface-visibility: $visibility;
  -moz-backface-visibility: $visibility;
  -ms-backface-visibility: $visibility;
  -o-backface-visibility: $visibility;
}

.front, .back {
    @include backface-visibility(hidden);
}

\`\`\`
有時我們也需要處理參數複雜的情形，此時可以使用 Lists、Maps 資料型態當輔助：
\`\`\` sass
@mixin stripes($direction, $width-percent, $stripe-color, $stripe-background: #FFF) {
  background: repeating-linear-gradient(
    $direction,
    $stripe-background,
    $stripe-background ($width-percent - 1),
    $stripe-color 1%,
    $stripe-background $width-percent
  );
}
\`\`\`
使用 Maps 資料格式存欲傳入變數：

\`\`\` sass
$college-ruled-style: (
    direction: to bottom,
    width-percent: 15%,
    stripe-color: blue,
    stripe-background: white
);
\`\`\`
變數使用 ... 進行傳遞：

\`\`\` sass
.definition {
      width: 100%;
      height: 100%;
      @include stripes($college-ruled-style...);
 }

\`\`\`
還有種情況是參數傳入當作字串（String interpolation）：
\`\`\` sass
// 使用 #{$file} 接收
@mixin photo-content($file) {
  content: url(#{$file}.jpg); //string interpolation
  object-fit: cover;
}

.photo {
  @include photo-content('titanosaur');
  width: 60%;
  margin: 0px auto;
}
\`\`\`
轉譯後：

\`\`\` sass
.photo {
  content: url(titanosaur.jpg);
  width: 60%;
  margin: 0px auto;
}
\`\`\`
更可以搭配 Nesting 使用：

\`\`\` sass
@mixin hover-color($color) {
&:hover {
color: $color;
}
}

.word {
@include hover-color(red);
}
\`\`\`
### 4.Functions
在 Sass 內建一些好用 functions 可以簡單設定色相、漸層，例如：adjust-hue($color, $degrees)、fade-out：
\`\`\` sass
$lagoon-blue: fade-out(#62fdca, 0.5);

\`\`\`
更多內建 Functions 可以[參考這邊](https://sass-lang.com/documentation/modules)

### 5.Operations：透過加減乘除和取餘數等運算子可以方便運算所需的屬性值

顏色加法：
\`\`\` sass
$color: #010203 + #040506;
/*
01 + 04 = 05
02 + 05 = 07
03 + 06 = 09
color: #050709;
*/
\`\`\`
> // 使用上需要注意：

\`\`\` sass
width: $variable/6; //division
line-height: (600px)/9; //division
margin-left: 20-10 px/ 2; //division
font-size: 10px/8px; //not division
\`\`\`

也可以使用 @each 語法迭代 list 內容：

\`\`\` sass
$list: (orange, purple, teal);

@each $item in $list {
  .#{$item} {
    background: $item;
  }
}
\`\`\`
使用 @for 迭代，並加入條件判斷：

\`\`\` sass
@for $i from 1 through $total {
  .ray:nth-child(#{$i}) {
background: adjust-hue(blue, $i * $step);
//
width: if($i % 2 == 0, 300px, 350px);
margin-left: if($i % 2 == 0, 0px, 50px);
  }
}

\`\`\`
### 6. @include 引用：可以引入其他 Sass、SCSS 檔案：
我們通常使用 Partials 去處理特定功能，方便管理和維護。以下是引用 _variables.scss 檔案範例，其中檔名前的 _ 表示引用前要先 compile：
\`\`\` sass
@import "variables";

\`\`\`
### 7.@extend 共用：

\`\`\` sass
.lemonade {
  border: 1px yellow;
  background-color: #fdd;
}
.strawberry {
  @extend .lemonade;
  border-color: pink;
}
\`\`\`
轉譯後：


\`\`\` sass
.lemonade, .strawberry {
  border: 1px yellow;
  background-color: #fdd;
}

.strawberry {
  @extend .lemonade;
  border-color: pink;
}
\`\`\`
搭配 Placeholders 使用：

\`\`\` sass
a%drink {
font-size: 2em;
background-color: $lemon-yellow;
}

.lemonade {
@extend %drink;
//more rules
}

\`\`\`
\`\`\` sass
a.lemonade {
font-size: 2em;
background-color: $lemon-yellow;
}

.lemonade {
//more rules
}

\`\`\`
### 8.@mixin 和 @extend 比較
\`\`\` sass
@mixin no-variable {
  font-size: 12px;
  color: #FFF;
  opacity: .9;
}

%placeholder {
  font-size: 12px;
  color: #FFF;
  opacity: .9;
}

span {
  @extend %placeholder;
}

div {
  @extend %placeholder;
}

p {
  @include no-variable;
}

h1 {
  @include no-variable;
}

\`\`\`
轉譯後：

\`\`\` sass
span, div{
  font-size: 12px;
  color: #FFF;
  opacity: .9;
}

p {
  font-size: 12px;
  color: #FFF;
  opacity: .9;
  //rules specific to ps
}

h1 {
  font-size: 12px;
  color: #FFF;
  opacity: .9;
  //rules specific to ps
}

\`\`\`
### 9.Sass 資料夾結構
\`\`\` sass
sass/
components/
_buttons.scss
helpers/
_variables.scss
_functions.scss
_mixins.scss
layout/
_grid.scss
_header.scss
_footer.scss
pages/
_home.scss
_contact.scss
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
