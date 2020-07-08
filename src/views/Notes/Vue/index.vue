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
        const isLocal = window.location.host !== 'ian8924.github.io'
        const arr = [
          {
            text: '首頁',
            disabled: false,
            href: isLocal ? '/' : '/vue-github-website/'
          },
          {
            text: '主題列表',
            disabled: false,
            href: isLocal ? '/#/notes' : '/vue-github-website/#/notes'
          },
          {
            text: 'Vue',
            disabled: newValue === 'vueList',
            href: isLocal ? '/#/notes/vue/list' : '/vue-github-website/#/notes/vue/list'
          }
        ]
        if (newValue !== 'vueList') {
          arr.push({
            text: newValue,
            disabled: true,
            href: `/#/notes/vue/${newValue}`
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
