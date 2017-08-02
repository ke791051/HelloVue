import Vue from 'vue'
import listCompleteDemo from './../../src/components/listCompleteDemo.vue'
import { destroyVM, createTest } from './util.js';
import $ from 'jquery'

describe('listCompleteDemo.vue', ()=>{
    let vm
    /**
     * 每個測試之前都會跑
     */
    beforeEach(() => {
        // 因為裡面已經寫好預設值為空，所以第二個參數props我沒有，第三個參數預設為true，所以也就不需要傳了
        vm = createTest(listCompleteDemo)
    })

    /**
     * 每個測試之後都會跑
     */
    afterEach(() => {
        destroyVM(vm) // 每次測試完都要destory Vue
    })

    it('亂數有效性', ()=> {
        const itemsLength = vm.items.length
        const random = vm.randomIndex()
        expect(random <= itemsLength && random > 0 ).true
    })

    it('add函數功能', ()=> {
        const itemsLength = vm.items.length
        vm.add()
        expect(vm.items.length).equal(eval(`itemsLength +=1`))
    })

    it('remove函數功能', ()=> {
        const itemsLength = vm.items.length
        vm.remove()
        expect(vm.items.length).equal(eval(`itemsLength +=-1`))
    })
})