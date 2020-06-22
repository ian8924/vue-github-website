<template>
<v-row class="mx-auto">
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="10"
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
</template>

<script>
export default {
  name: 'notes',
  data () {
    return {
      items: [
        {
          color: '#1F7087',
          src: require('../assets/note.jpg'),
          title: 'Supermodel',
          artist: 'Foster the People'
        },
        {
          color: '#952175',
          src: require('../assets/note.jpg'),
          title: 'Halcyon Days',
          artist: 'Ellie Goulding'
        }
      ]
    }
  }

}
</script>

<style>

</style>
