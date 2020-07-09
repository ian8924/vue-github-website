<template>
  <div>
    <button>
      <slot name="p1" />
    </button>
    <div style="width:100px;height:100px;background:red">
      <slot name="p2" />
    </div>
    <div style="width:100px;height:100px;background:green">
      <slot name="p3" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
