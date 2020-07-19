<template>
  <div style="padding:20px 0 200px 10%">
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
  name: 'Notes'
}
</script>

<style>

</style>
