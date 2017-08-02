<template>
  <div>
    <div class="form-group card">
      <div class="card-header text-center">
        app
      </div>
      <div class="card-block">
        {{ message }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>
<style>

</style>