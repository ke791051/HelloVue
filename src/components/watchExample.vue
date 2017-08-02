<template>
  <div class="form-group card">
    <div class="card-header text-center">
      watchExample
      <p>
        {{ numResult | numFilters }}
      </p>
    </div>
    <div class="card-block">
      <div class="form-group">
        <input class="form-control col-sm-6 col-xs-12" type="text" v-model="num1" />
      </div>
      <div class="form-group">
        <input class="form-control col-sm-6 col-xs-12" type="text" v-model="num2" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      numResult: 0,
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
  watch: {
    num1 (val) {
      this.numResult = parseFloat(val) / parseFloat(this.num2)
    },
    num2 (val) {
      this.numResult = parseFloat(this.num1) / parseFloat(val)
    }
  }
}
</script>
<style>

</style>