import Vue from 'vue'
import VueRouter from 'vue-router'
import App1 from './../components/app1.vue'
import App2 from './../components/app2.vue'
import App3 from './../components/app3.vue'
import App4 from './../components/app4.vue'
import DateExample from './../components/dateExample.vue'
import WatchExample from './../components/watchExample.vue'
import ComputedExample from './../components/computedExample.vue'
import PartialComponentExample from './../components/partialComponentExample.vue'
import AnimateExample from './../components/animateExample.vue'
import ListDemo from './../components/listDemo.vue'
import ListCompleteDemo from './../components/listCompleteDemo.vue'
import ReadMeExample from './../components/readMeExample.vue'


Vue.use(VueRouter)

module.exports = {
  app: new Vue({
    el: '.container-fluid',
    components: {
      app1: App1,
      app2: App2,
      app3: App3,
      app4: App4,
      dateExample: DateExample,
      watchExample: WatchExample,
      computedExample: ComputedExample,
      partialComponentExample: PartialComponentExample,
      animateExample: AnimateExample,
      listDemo: ListDemo,
      listCompleteDemo: ListCompleteDemo,
      readMeExample: ReadMeExample
    },
  }),
}

