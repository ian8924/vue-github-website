<template>
   <v-app-bar
      app
      style="background-color :rgb(100, 95, 95)"
    >
        <v-icon style="color:white;font-size:20px" @click="changeSidebar">fas fa-list</v-icon>
      <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
  name: 'header',
  methods: {
    changeSidebar () {
      this.$store.commit('setSidebarDraw', !this.$store.state.sidebarDraw)
    }
  }
}
</script>
<style lang="scss" scoped>
.header{
    width:100%;
    height:40px;
}
</style>
