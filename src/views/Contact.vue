<template>
  <div>
    <MyButton :discount="234">
      <template v-slot:p1>
        11111
      </template>
      <template v-slot:p2>
        22222
      </template>
      <template v-slot:p3>
        33333
      </template>
    </MyButton>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton'
export default {
  name: 'Contact',
  components: {
    MyButton
  },
  data () {
    return {
      test: 'sss'
    }
  }
}
</script>
