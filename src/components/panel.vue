<template>
  <div>{{parentMsg}}
    <slot> 上層無內容</slot>
  </div>
</template>
<script>
export default {
  props: { parentMsg: String }
}
</script>
<style>

</style>