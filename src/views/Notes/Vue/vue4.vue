<template>
  <div>
     <v-md-preview  :text="text" ></v-md-preview>
  </div>
</template>

<script>
const text = `###### tags: \`vue\` \`vue-new\`
# transition 效果
要做的div外層包一層trasitions

css setting
\`\`\` css
.fade-enter-active,.fade-leave-active {
        transition: opacity 1s;
}
.fade-enter,.fade-leave-to {
        opacity: 0;
}
\`\`\`
需要用key去辨別DOM的不同
\`\`\` html
一開始套用效果
<transition name="fade" apear >
mode 先出後進
<transition name="fade" mode="out-in" >
mode 先進後出
<transition name="fade" mode="in-out" >

example:
<transition name="fade" >
    <div class="pic" :style="nowBackground" :key="nowPic.id"></div>
</transition>
\`\`\`

## transition-group 用法
tag需要調整
\`\`\` html
 <transition-group tag="div" name="fade" class="container" mode="out-in">
          <div
            class="pic"
            v-for="(item,index) in list"
            v-show="index === active"
            :style="getBackground(index)"
            :key="item.id"
          ></div>
</transition-group>
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
