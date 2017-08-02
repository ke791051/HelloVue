<template>
    <li>
        {{ myMessage }} {{ msg.text }}
        <slot name="parentmsg">父元素無內容</slot>
        <panel v-bind:parentMsg="myMessage"></panel>
    </li>
</template>
<script>
import panel from './panel.vue'

export default {
  components: {
    panel
  },
  props: ['msg', 'myMessage', 'pkey']
}
</script>
<style>

</style>