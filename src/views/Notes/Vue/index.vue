<template>
  <div>
    <h2 v-if="$route.name ==='vue'">
      文章列表
    </h2>
    <v-list
      v-if="$route.name ==='vue'"
      two-line
      style="margin-right:20px;"
    >
      <v-list-item-group>
        <template v-for="(item, index) in items">
          <v-list-item
            :key="item.title"
            @click="$router.push({name:item.link})"
          >
            <template>
              <v-list-item-content>
                <v-list-item-title v-text="`${index+1}. `+item.title" />
                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                />
                <v-list-item-subtitle v-text="item.subtitle" />
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          />
        </template>
      </v-list-item-group>
    </v-list>
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
  data: () => ({
    items: [
      {
        action: '15 min',
        title: 'Vue專案建置',
        headline: '2020.1.22',
        subtitle: 'vue ui',
        link: 'vue1'
      },
      {
        action: '15 min',
        title: 'Router',
        headline: '2020.1.22',
        subtitle: '路由觀念',
        link: 'vue2'
      },
      {
        action: '15 min',
        title: 'keep-alive和conponent組鍵',
        headline: '2020.1.22',
        subtitle: 'keep-alive和conponent組鍵',
        link: 'vue3'
      },
      {
        action: '15 min',
        title: 'transition 效果',
        headline: '2020.1.22',
        subtitle: 'transition 效果',
        link: 'vue4'
      },
      {
        action: '15 min',
        title: 'Vue cli 環境變數',
        headline: '2020.1.22',
        subtitle: 'Vue cli 環境變數',
        link: 'vue5'
      },
      {
        action: '15 min',
        title: 'Timer',
        headline: '2020.1.22',
        subtitle: 'Timer',
        link: 'vue6'
      },
      {
        action: '15 min',
        title: 'fileuploader',
        headline: '2020.1.22',
        subtitle: 'fileuploader',
        link: 'vue7'
      },
      {
        action: '15 min',
        title: 'SSR & prerender',
        headline: '2020.1.22',
        subtitle: 'SSR & prerender',
        link: 'vue8'
      },
      {
        action: '15 min',
        title: 'watch應用',
        headline: '2020.1.22',
        subtitle: 'watch應用',
        link: 'vue9'
      },
      {
        action: '15 min',
        title: 'computed運用',
        headline: '2020.1.22',
        subtitle: 'computed運用',
        link: 'vue10'
      },
      {
        action: '15 min',
        title: '資料綁定',
        headline: '2020.1.22',
        subtitle: '資料綁定',
        link: 'vue11'
      },
      {
        action: '15 min',
        title: 'vue常用套件',
        headline: '2020.1.22',
        subtitle: 'vue常用套件',
        link: 'vue12'
      },
      {
        action: '15 min',
        title: 'vue架構',
        headline: '2020.1.22',
        subtitle: 'vue架構',
        link: 'vue13'
      },
      {
        action: '15 min',
        title: 'vue指令',
        headline: '2020.1.22',
        subtitle: 'vue指令',
        link: 'vue14'
      },
      {
        action: '15 min',
        title: 'lifecycle',
        headline: '2020.1.22',
        subtitle: 'lifecycle',
        link: 'vue15'
      }
    ]
  })
}
</script>

<style>

</style>
