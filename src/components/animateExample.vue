<template>
  <div class="form-group card">
    <div class="card-header text-center">
      animateExample
    </div>
    <div class="card-block">
      <button class="btn btn-outline-secondary" @click="switchShow">開關</button>
      <transition name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
      :duration="{ enter: 500, leave: 3000 }">
        <p v-if="show">hello</p>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    switchShow () {
      this.show = (!this.show)
    }
  }
}
</script>
<style>

</style>