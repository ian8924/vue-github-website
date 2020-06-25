<template>
<div style="padding:20px 0 0 10%">
  <h2 v-if="$route.name==='SideProject'">主題列表</h2>
  <v-row class="mx-auto" v-if="$route.name==='SideProject'">
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
          title: '口罩地圖範例',
          link: 'Map',
          artist: 'ian'
        },
        {
          color: '#1F7087',
          src: require('../../assets/note.jpg'),
          title: '聊天室',
          link: 'Chatroom',
          artist: 'ian'
        },
        {
          color: '#1F7087',
          src: require('../../assets/note.jpg'),
          title: '桌遊網站',
          target: 'http://happy6.s3-website-ap-northeast-1.amazonaws.com/',
          artist: 'ian'
        }
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
