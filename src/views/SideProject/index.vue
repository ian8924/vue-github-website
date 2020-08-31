<template>
  <div style="padding:20px 0 200px 10%">
    <h2 v-if="$route.name==='SideProject'">
      主題列表
    </h2>
    <v-row
      v-if="$route.name==='SideProject'"
      class="mx-auto"
    >
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="10"
        @click="goLink(item.link,item.target)"
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
          title: '口罩地圖範例',
          link: 'Map',
          artist: '應用 openstreetmap ＆ leaflet 結合政府 opendatas'
        },
        {
          color: '#1F7087',
          src: require('../../assets/note.jpg'),
          title: '聊天室',
          link: 'Chatroom',
          artist: '串接 google login api + FB login api + firebase realtime '
        },
        {
          color: '#1F7087',
          src: require('../../assets/note.jpg'),
          title: '桌遊網站',
          target: 'http://happy6.s3-website-ap-northeast-1.amazonaws.com/',
          artist: '使用 react 專案'
        },
        {
          color: '#1F7087',
          src: require('../../assets/note.jpg'),
          title: 'Youtube',
          target: 'https://ian8924.github.io/video-project/#/',
          artist: '串接Youtube API & Videojs'
        },
        {
          color: '#1F7087',
          src: require('../../assets/note.jpg'),
          title: 'cms 後台',
          target: 'https://ian8924.github.io/cms-vue/',
          artist: 'elementUI + vue cli'
        }
        // {
        //   color: '#1F7087',
        //   src: require('../../assets/note.jpg'),
        //   title: '貪食蛇',
        //   link: 'Snake',
        //   artist: 'canvas'
        // }
      ]
    }
  },
  methods: {
    goLink (link, target) {
      if (link) {
        this.$router.push({ name: link })
      } else {
        window.open(target)
      }
    }
  }
}
</script>

<style>

</style>
