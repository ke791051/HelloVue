<template>
  <div class="form-group card">
    <div class="card-header text-center">
      app-4
    </div>
    <div class="card-block">
      <ol>
        <msg-item 
          v-bind:class="{inActive : isActive}" 
          v-bind:style="liStyle"
          v-for="(msg, index) in messageList"
          v-bind:msg="msg"
          v-bind:key="index"
          v-if="ok"
          my-message="訊息">
          <p slot="parentmsg">test</p>
          <p>test2</p>
        </msg-item>
      </ol>
    </div>
  </div>
</template>
<script>
import msgItem from './msgItem.vue'
export default {
  components:{
    msgItem: msgItem
  },
  data () {
    return {
      messageList: [
        { id: 0, text: '訊息：' },
        { id: 1, text: '今天是個學習Vue的好日子' },
        { id: 2, text: '留言人' },
      ],
      isActive: true,
      liStyle: {
        color: '#BBB',
      },
      ok: true,
    }
  }
}
</script>
<style>

</style>