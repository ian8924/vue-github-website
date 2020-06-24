<template>
<div>
    <h2 v-if="$route.name ==='test'">文章列表</h2>
    <v-list two-line style="margin-right:20px;" v-if="$route.name ==='test'">
      <v-list-item-group>
        <template v-for="(item, index) in items" >
          <v-list-item :key="item.title" @click="$router.push({name:item.link})">
            <template >
              <v-list-item-content>
                <v-list-item-title v-text="`${index+1}. `+item.title"></v-list-item-title>
                <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
     <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
      </transition>
</div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        action: '15 min',
        title: 'Cypress',
        headline: '2020.1.22',
        subtitle: 'Cypress',
        link: 'test1'
      },
      {
        action: '15 min',
        title: 'Jest',
        headline: '2020.1.22',
        subtitle: 'Jest',
        link: 'test2'
      }
    ]
  })
}
</script>
