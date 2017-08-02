import Vue from 'vue'
import app3 from './../../src/components/app3.vue'
import { destroyVM, createTest } from './util.js';
import $ from 'jquery'

describe('app3.vue', ()=>{
    let vm
    /**
     * 每個測試之前都會跑
     */
    beforeEach(() => {
        // 因為裡面已經寫好預設值為空，所以第二個參數props我沒有，第三個參數預設為true，所以也就不需要傳了
        vm = createTest(app3)
    })

    /**
     * 每個測試之後都會跑
     */
    afterEach(() => {
        destroyVM(vm) // 每次測試完都要destory Vue
    })

    it('reserve按鈕功能', ()=> {
        const message = vm.message
        $(vm.$el.querySelector('.btn-secondary')).trigger('click')
        expect(vm.message).equal(message.split('').reverse().join(''))
    })

    it('清除功能', ()=> {
        vm.clearMessage()
        expect(vm.message).equal('')
    })
})