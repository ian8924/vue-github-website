<template>
  <div style="padding:20px 0 0 10%">
    <h2 v-if="$route.name==='notes'">
      主題列表
    </h2>
    <v-row
      v-if="$route.name==='notes'"
      class="mx-auto"
    >
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="10"
        @click="$router.push({name:item.link})"
      >
        <v-card
          :color="item.color"
          dark
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="headline"
                v-text="item.title"
              />

              <v-card-subtitle v-text="item.artist" />
            </div>

            <v-avatar
              class="ma-3"
              size="125"
              tile
            >
              <v-img :src="item.src" />
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
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
  name: 'Notes',
  data () {
    return {
      items: [
        {
          color: '#1F7087',
          src: require('../../assets/note.jpg'),
          title: 'Javascript 相關筆記',
          link: 'javascript',
          artist: 'ian'
        },
        {
          color: '#cccc00',
          src: require('../../assets/note.jpg'),
          title: 'Vue 筆記',
          link: 'vue',
          artist: 'ian'
        },
        {
          color: '#cc99cd',
          src: require('../../assets/note.jpg'),
          title: '自動化測試',
          link: 'test',
          artist: 'ian'
        },
        {
          color: 'rgb(153,199,205)',
          src: require('../../assets/note.jpg'),
          title: 'CSS 筆記',
          link: 'css',
          artist: 'ian'
        }
      ]
    }
  }
}
</script>

<style>

</style>
