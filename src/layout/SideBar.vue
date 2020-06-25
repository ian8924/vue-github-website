<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
  >
    <v-divider />
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :class="{'gray':item.route===$route.name}"
        link
        @click="goRoute(item.route)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: '首頁', icon: 'mdi-view-dashboard', route: 'home' },
        { title: '簡介', icon: 'mdi-image', route: 'hello' },
        { title: '筆記', icon: 'mdi-help-box', route: 'notes' },
        { title: 'sideProject', icon: 'mdi-help-box', route: 'SideProject' }
      ],
      right: null
    }
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.sidebarDraw
      },
      set (val) {
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
        this.$store.commit('setSidebarDraw', val)
      }
    }
  },
  methods: {
    goRoute (val) {
      if (val !== this.$route.name) {
        this.$router.push({ name: val })
      }
    }
  }
}
</script>
<style  scoped>
.gray{
  background: rgb(167, 162, 162);
}
</style>
