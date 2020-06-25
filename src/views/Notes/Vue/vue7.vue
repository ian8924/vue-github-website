<template>
  <div style="margin:20px 10%">
    <v-md-preview :text="text" />
  </div>
</template>

<script>
const text = `
###### tags: \`vue\` \`vue-new\`
# fileUpload
[https://hackmd.io/0-84NpztRh2KpjiV1mEFeQ](http://)
>    1.先做FileReader工具宣告
>    let reader=new FileReader();



> 2.綁定change事件
<input
>                 class="file"
>                 ref="fileInput"
>                 type="file"
>                 accept="image/*"
>                 @change="fileHandler"
>               />

>   3.methods 抓取reader的file值
>   fileHandler(e) {
>             reader.readAsDataURL(e.target.files[0]);
>           },

>   4.mounted綁定onload事件
>   mounted (){
>           reader.onload= this.fileLoadedHandler;
>         }
>

>   // 5.onload的file值 帶入 states
>  fileLoadedHandler (e){
>           this.list.push({ id: new Date().getTime() , src:e.target.result  });
>           },
\`\`\` javascript
<style>
      .img {
        position: relative;
        display: inline-block;
        margin: 10px;
        width: 120px;
        height: 90px;
        background-position: center;
        background-size: cover;
        border: 10px solid #fff;
        border-bottom: 50px solid #fff;
      }
      .img > div {
        position: absolute;
        bottom: -40px;
        text-align: center;
        width: 100%;
      }
      .img > div > span {
        display: inline-block;
        cursor: pointer;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        color: #fff;
        background-color: #34495e;
        font-weight: bolder;
      }
      .img span.delete {
        background-color: crimson;
      }
    </style>
\`\`\`
\`\`\` javascript
<body>
    <div id="app">
      <section>
        <div class="container">
          <div>
            <div class="img"  v-for="(item,index) in list"
              :key="item.id"
              :style="{backgroundImage:\`url('\${item.src}')\`}">
              <div>
                <span @click=changeIndex(index,-1)><</span>
                <span class="delete" @click="deleteIt(item.id)">X</span>
                <span @click=changeIndex(index,1)>></span>
              </div>
            </div>
          </div>
          <div>
            <div class="button" style="position: relative;overflow:hidden;" >
              新增圖片
              <input
                class="file"
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="fileHandler"
              />
              <!-- 2.綁定change事件 -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>
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
