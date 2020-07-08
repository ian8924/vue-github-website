<template>
  <div>
    <v-breadcrumbs
      :items="breads"
      large
    />
    <transition
      name="slide-fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      breads: []
    }
  },
  watch: {
    '$route.name': {
      immediate: true,
      handler (newValue, oldValue) {
        const arr = [
          {
            text: '首頁',
            disabled: false,
            href: '/'
          },
          {
            text: '主題列表',
            disabled: false,
            href: '/#/notes'
          },
          {
            text: 'Css',
            disabled: newValue === 'cssList',
            href: '/#/notes/css/list'
          }
        ]
        if (newValue !== 'cssList') {
          arr.push({
            text: newValue,
            disabled: true,
            href: `/#/notes/css/${newValue}`
          })
        }
        this.breads = arr
      }
    }
  }
}
</script>

<style>
.v-application a {
    color: #19232e;
}
</style>
