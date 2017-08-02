<template>
  <button class="btn btn-outline-secondary" 
    @click="countAdd">
    {{numCount}}
  </button>
</template>
<script>
export default {
  data() {
    return {
      numCount: this.num,
    }
  },
  props: {
    num: Number, total: Number,
  },
  methods: {
    countAdd() {
      this.numCount += 1
      this.total += 1
      this.$emit('update:total', this.total)
    },
  },
}
</script>
<style>

</style>