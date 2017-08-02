import Vue from 'vue'
import countTemplant from './../../src/components/countTemplant.vue'
import { destroyVM, createTest } from './util.js';
import $ from 'jquery'

describe('countTemplant.vue', ()=>{
    let vm
    const [num, total] = [1, 0]
    /**
     * 每個測試之前都會跑
     */
    beforeEach(() => {
        // 因為裡面已經寫好預設值為空，所以第二個參數props我沒有，第三個參數預設為true，所以也就不需要傳了
        const props = {num:num, total:total}
        vm = createTest(countTemplant, props)
    })

    /**
     * 每個測試之後都會跑
     */
    afterEach(() => {
        destroyVM(vm) // 每次測試完都要destory Vue
    })

    it('當執行一次時候，資料將會改變', ()=> {
        const[tempNum, tempTotal] = [num, total]
        vm.countAdd()
        expect(vm.numCount).equal(eval(`tempNum +=1`))
        expect(vm.total).equal(eval(`tempTotal +=1`))
    })
    it('當點擊一次時候，資料將會改變', ()=> {
        const[tempNum, tempTotal] = [num, total]
        $(vm.$el).trigger('click')
        expect(vm.numCount).equal(eval(`tempNum +=1`))
        expect(vm.total).equal(eval(`tempTotal +=1`))
    })
})