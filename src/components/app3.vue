<template>
  <div class="form-group card">
    <div class="card-header text-center">
      app-3
    </div>
    <div class="card-block">
      <p>{{ message }}</p>
      <button class="btn btn-secondary" v-on:click="reverseMessage" v-on:dblclick="clearMessage">reserve</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message:  'Hello Vue.js'
    }
  },
  methods: {
      reverseMessage() {
        const message = this.message
        if (message === '') {
          this.message = 'Hello Vue.js'
        } else {
          this.message = message.split('').reverse().join('')
        }
      },
      clearMessage() {
        this.message = ''
      },
    },
}
</script>
<style>

</style>