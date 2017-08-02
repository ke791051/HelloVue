<template>
  <div class="form-group card">
    <div class="card-header text-center">
    app-2
    </div>
    <div class="card-block">
    <span v-bind:title="message">
        指標停留幾秒鐘查看此處動態綁定的訊息
    </span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: `頁面加載於： ${new Date()}`
    }
  }
}
</script>
<style>

</style>