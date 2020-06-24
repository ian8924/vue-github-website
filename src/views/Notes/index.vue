<template>
<div style="padding:20px 0 0 10%">
  <h2 v-if="$route.name==='notes'">主題列表</h2>
  <v-row class="mx-auto" v-if="$route.name==='notes'">
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
                  ></v-card-title>

                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                </div>

                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
    </v-row>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
</div>
</template>

<script>
export default {
  name: 'notes',
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
        }
      ]
    }
  }
}
</script>

<style>

</style>
