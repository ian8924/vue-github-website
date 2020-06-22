<template>
  <div>
     <v-md-preview  :text="text" ></v-md-preview>
  </div>
</template>

<script>
const text = `###### tags: \`vue\` \`vue-new\`
# computed 運用
## 基本read

\`\`\`  js
computed:{
    citys(){
       return  this.data  //單純抓值
    }

}
\`\`\`
## 進階用法 get set
computed的set是改變值前先做set的function
\`\`\` js
computed:{
    cityCompute:{
        get(){
           return  this.city  //偵測city的值
       },;
        set(value){           //若是city變，則清空area
           this.city=value;
           this.area="";
       }
    }

}

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
