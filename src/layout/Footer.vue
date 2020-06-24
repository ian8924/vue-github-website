<template>
  <v-card >
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="lighten-1 text-center"
        style="background:rgb(100, 95, 95)"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-4"
            icon
            @click="goLink(icon.link)"
          >
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        icon: 'mdi-home',
        link: 'home'
      },
      {
        icon: 'mdi-email',
        link: 'home'
      },
      {
        icon: 'mdi-calendar',
        link: 'home'
      },
      {
        icon: 'mdi-instagram',
        link: 'home'
      }
    ],
    items: [
      'default',
      'absolute',
      'fixed'
    ],
    padless: false,
    variant: 'absolute'
  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    }
  },
  methods: {
    goLink (link) {
      this.$router.push({ name: link })
    }
  }
}
</script>
<style scoped>
.v-footer{
    background: rgb(100, 95, 95);
    padding: 0;
}

</style>
