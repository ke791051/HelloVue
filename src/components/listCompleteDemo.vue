<template>
  <div class="form-group card">
    <div class="card-header text-center">
      list-complete-demo
    </div>
    <div class="card-block">
      <button class="btn btn-outline-secondary" v-on:click="shuffle">Shuffle</button>
      <button class="btn btn-outline-secondary" v-on:click="add">Add</button>
      <button class="btn btn-outline-secondary" v-on:click="remove">Remove</button>
      <transition-group name="list-complete" tag="p">
        <span v-for="item in items" :key="item" class="list-complete-item">
          {{ item }}
        </span>
      </transition-group>
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
    },
    shuffle () {
      this.items = _.shuffle(this.items)
    }
  }
}
</script>
<style>

</style>