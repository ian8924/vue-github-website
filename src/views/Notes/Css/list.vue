<template>
  <div>
    <h2 v-if="$route.name ==='cssList'">
      文章列表
    </h2>
    <v-list
      v-if="$route.name ==='cssList'"
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
  </div>
</template>

<script>
export default {
  name: 'List',
  data: () => ({
    items: [
      {
        action: '15 min',
        title: 'GRID',
        headline: '2020.6.30',
        subtitle: 'GRID 方法範例',
        link: 'css1'
      },
      {
        action: '15 min',
        title: 'SCSS 入門',
        headline: '2020.7.8',
        subtitle: 'SCSS使用方法',
        link: 'css2'
      }
    ]
  })
}
</script>
