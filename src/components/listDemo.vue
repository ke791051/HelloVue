<template>

  <div class="form-group card">
    <div class="card-header text-center">
      list-demo
    </div>
    <div class="card-block">
      <button class="btn btn-outline-secondary" 
        v-on:click="add">
        Add
      </button>
      <button class="btn btn-outline-secondary"
        v-on:click="remove">
        Remove
      </button>
      <div is="transition-group" 
           name="list" 
           tag="p" 
           enter-active-class="animated fadeInUp" 
           leave-active-class="animated fadeOutDown">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    randomIndex () {
      return Math.floor(Math.random() * this.items.length)
    },
    add () {
      this.items.splice(this.randomIndex(), 0, this.nextNum += 1)
    },
    remove () {
      this.items.splice(this.randomIndex(), 1)
    }
  }
}
</script>
<style>

</style>