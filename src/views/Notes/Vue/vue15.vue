<template>
  <div>
     <v-md-preview  :text="text" ></v-md-preview>
  </div>
</template>

<script>
const text = `###### tags: \`vue\`
# lifecycle
![](https://i.imgur.com/xaVtrrb.png)
\`\`\`javascript=
<template>
  <div id="example-3">

    <div>LIFECYCLE</div>
    <div>{{num}}</div>
<button @click="add">+</button>
<button @click="sub">-</button>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "hello1",
  data: () => {
    return {
     num:1
    };
  },
   methods: {
    add: function() {
    //   console.log(this.num)
      this.num++;
    },
    sub: function() {
    //   console.log(this.num)
      this.num--;
    },
  },
    beforeCreate: function() { console.log('beforeCreate');
     },
    created: function() { console.log('Create') },
    beforeMount: function() { console.log('beforeMount') },
    mounted: function() { console.log('mounted') },
    beforeUpdate: function() { console.log('beforeUpdate') },
    updated: function() { console.log('updated') }
};
<
/script>


\`\`\``
export default {
  data () {
    return {
      text
    }
  }
}
</script>

<style>

</style>
