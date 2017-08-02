<template>
    <div class="form-group card dateExample">
        <div class="card-header text-center">
            dateExample
        </div>
        <div class="card-block">
            <p>
                {{ nowDate | dateFilters }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      nowDate: new Date()
    }
  },
  filters: {
    dateFilters (value) {
      if (!value) return ''
      const outPut = `${value.getFullYear()}年${(value.getMonth() + 1)}月${value.getDate()}日${value.getHours()}:${value.getMinutes()}:${value.getSeconds()}`
      return outPut
    }
  }
}
</script>
<style>

</style>