import Vue from 'vue'
import dateExample from './../../src/components/dateExample.vue'
import { destroyVM, createTest } from './util.js';
import $ from 'jquery'

describe('dateExample.vue', ()=>{
    let vm
    const [num, total] = [1, 0]
    /**
     * 每個測試之前都會跑
     */
    beforeEach(() => {
        // 因為裡面已經寫好預設值為空，所以第二個參數props我沒有，第三個參數預設為true，所以也就不需要傳了
        const props = {num:num, total:total}
        vm = createTest(dateExample, props)
    })

    /**
     * 每個測試之後都會跑
     */
    afterEach(() => {
        destroyVM(vm) // 每次測試完都要destory Vue
    })

    it('資料格式正確', ()=> {
        const timeData = vm.$el.querySelector('p').textContent
        expect(/\d{4}年\d{1,2}月\d{1,2}日\d{1,2}:\d{1,2}:\d{1,2}$/u.test(timeData.trim())).true
    })
})