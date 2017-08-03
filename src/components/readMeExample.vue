<template>
	<div class="form-group card">
		<div class="card-header text-center">
			redeMeExample
		</div>
		<div class="card-block">
			<router-link 
				v-for="(page, index) in pageList" 
				:key="index" 
				:to="'/'+page">
				<button class="btn btn-outline-secondary" 
					type="button">
					{{ page }}
				</button>
			</router-link>
			<transition 
				name="list" 
				tag="p" 
				enter-active-class="animated fadeIn" 
				leave-active-class="animated fadeOut"
				mode="out-in"
				:duration="{ enter: 300, leave: 300 }">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
// 引用VueRouter模組
import VueRouter from 'vue-router'
// 建立假資料，模擬從後端來源資料為array型態
const pageList = ['README', 'Other', 'test']

// 建立路由集合
// 從資料來源建立路由集合資料(forEach)
// const routes = []
// pageList.forEach((page) => {
//   const mdComponent = (resolve) => {
//     // 捕捉require錯誤，並將錯誤顯示於console中
//     require([(`./../../${page}.md`)], resolve, (error) => {
//       if (error) { console.log(`can't find the file ${page}.md`) }
//     })
//   }
//   routes.push({
//     path: `/${page.toLowerCase()}`,
//     component: mdComponent
//   })
// })

// 從資料來源建立路由集合資料(map)
const routes = pageList.map((page) => {
  const mdComponent = (resolve) => {
    // 捕捉require錯誤，並將錯誤顯示於console中
    require([(`./../../${page}.md`)], resolve, (error) => {
      if (error) { console.log(`can't find the file ${page}.md`) }
    })
  }
  return {
    path: `/${page.toLowerCase()}`,
    component: mdComponent
  }
})
// 初始化VueRouter物件，將路由集合傳入
const router = new VueRouter({
  routes
})
// 建立Vue組件
export default {
  data () {
    return {
      pageList,
      pageName: 'README'
    }
  },
  // 建立路由
  router
}
</script>

<style>

</style>
