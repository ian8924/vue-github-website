<template>
  <div>
     <v-md-preview  :text="text" ></v-md-preview>
  </div>
</template>

<script>
const text = `###### tags: \`vue\`
# VUE 架構
\`\`\` javascript
<template>
  <div id="example-3">
    <button @click="say('hi')">Say hi</button>
    <button @click="say('what')">Say what</button>
    <div>test1</div>
    <div>{{msg}}</div>
      <ul>

      <li  v-for="(item,key) in array1" >
        <h2>{{key}}:{{ item.locationName }}</h2>
        <h3>{{ item.parameterName1 }}</h3>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "hello",
  methods: {
    say: a => {
      alert(a);
    }
  },
  data: () => {
    return {
      msg: "Welcome to Your Vue.js App1111",
      array1: [{ a: 1 }]
    };
  },

  mounted: function(data) {
    // console.log(this.array1);
    var a = [];
    fetch(
      "https://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=e6831708-02b4-4ef8-98fa-4b4ce53459d9"
    )
      .then(function(response) {
        return response.json();
      })
      .then(
        (j)=> {
        // console.log(j.result.results);
        a = j.result.results;
        this.array1=a;
        console.log(this.array1);
      });
  }
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
