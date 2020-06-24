<template>
  <v-app>
    <Header />
      <div style="padding:80px 0 0 80px">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
      </div>
    <SideBar/>
  </v-app>
</template>

<script>
import Header from './layout/Header'
import SideBar from './layout/SideBar'
export default {
  name: 'App',
  components: {
    Header,
    SideBar
  }
}
</script>

<style >
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
