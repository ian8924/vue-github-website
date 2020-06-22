<template>
  <div style="margin:20px 10%">
     <v-md-preview  :text="text" ></v-md-preview>
  </div>
</template>

<script>
const text = '[https://hackmd.io/mr6wn4L0Q9mxhHCRKS4fUw](http://)'
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
