<template>
  <div style="margin:20px 10%">
     <v-md-preview  :text="text" ></v-md-preview>
  </div>
</template>

<script>
const text = `###### tags: \`vue\` \`vue-new\`
# keep-alive和conponent組鍵
## keep-alive
優點保留舊資料得完整性和減少和後端的溝通次數,缺點是有可能缺乏即時性
\`\`\` js
<keep-alive :include="keepPrevStep">
        <name-component v-if="step===0"></name-component>
        <gender-component v-if="step===1"></gender-component>
        <area-component v-if="step===2"></area-component>
</keep-alive>
\`\`\`
<keep-alive>    :include 用法：
放入的是要保留的component名稱陣列,若是要全部保留則include不設定
\`\`\` javascript
keepPrevStep(){
  return this.mapping.reduce((acc, current) => {
              if (current.step <= this.step) {
                acc.push(current.name);
              }
              return acc;
            }, []);
}

\`\`\`
## component
為了避免程式碼太過冗長，把compont寫在Array[ ]內有助於管理componets
\`\`\` html
// ：is
  <component  :is="nowComponent" :key="nowComponent"></component>
\`\`\`
\`\`\` javascript
 mapping: [                                 //Component data
    { step: 0, name: "name-component" },
    { step: 1, name: "gender-component" },
    { step: 2, name: "area-component" }
]

                                            //Computed 回傳當前componentName
compute:{
     nowComponent(){
        return this.mapping[this.step].name
    }
}
\`\`\`
## transitions與keep-alive共用
transitions需要包在keep-alive外面
\`\`\` html
<transition name="fade" mode="out-in">
    <keep-alive>
             <component  :is="nowComponent" :key="nowComponent"></component>
    </keep-alive>
</transition>

\`\`\``
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
