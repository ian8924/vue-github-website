<template>
  <v-app>
    <Header />
      <div style="padding:80px 0 0 80px">
        <router-view></router-view>
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
