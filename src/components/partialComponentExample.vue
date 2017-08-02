<template>
  <div class="form-group card">
    <div class="card-header text-center">
      partialComponentExample
    </div>
    <div class="card-block">
      <div class="form-group">
        <input class="form-control col-sm-6 col-xs-12" type="text" v-model="numTotal" v-on:keyup.enter="countConsole" />
      </div>
      <count-button :num="1" :total.sync="numTotal"></count-button>
      <count-button :num="2" :total.sync="numTotal"></count-button>
      <count-button :num="3" :total.sync="numTotal"></count-button>
      <count-button :num="4" :total.sync="numTotal"></count-button>
    </div>
  </div>
</template>
<script>
import countButton from './countTemplant.vue'

export default {
  data () {
    return {
      numTotal: 0
    }
  },
  components: {
    countButton
  }
}
</script>
<style>

</style>