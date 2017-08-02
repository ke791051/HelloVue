import Vue from 'vue'
import computedExample from './../../src/components/computedExample.vue'
import { destroyVM, createTest } from './util.js';
import $ from 'jquery'

describe('computedExample.vue', ()=>{
    let vm
    /**
     * 每個測試之前都會跑
     */
    beforeEach(() => {
        // 因為裡面已經寫好預設值為空，所以第二個參數props我沒有，第三個參數預設為true，所以也就不需要傳了
        vm = createTest(computedExample)
    })

    /**
     * 每個測試之後都會跑
     */
    afterEach(() => {
        destroyVM(vm) // 每次測試完都要destory Vue
    })

    it('10除以2必等於5', ()=> {
        vm.num1 = 10
        vm.num2 = 2
        expect(vm.numResult).equal(5)
    })
})