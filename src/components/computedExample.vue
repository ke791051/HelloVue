<template>
  <div class="form-group card computedExample">
    <div class="card-header text-center">
      computedExample
      <p>
        {{ numResult | numFilters }}
      </p>
    </div>
    <div class="card-block">
      <div class="form-group">
        <input class="form-control col-sm-6 col-xs-12" type="text" v-model.lazy.number="num1" />
      </div>
      <div class="form-group">
        <input class="form-control col-sm-6 col-xs-12" type="text" v-model.number="num2" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      num1: 0,
      num2: 0
    }
  },
  filters: {
    numFilters (value) {
      if (!value) return ''
      return value.toFixed(3)
    }
  },
  computed: {
    numResult () {
      if (this.num1 === 0 || this.num2 === 0) { return 0 }
      return parseFloat(this.num1) / parseFloat(this.num2)
    }
  }
}
</script>
<style>

</style>