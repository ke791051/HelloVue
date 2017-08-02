import Vue from 'vue'
import app1 from './../../src/components/app1.vue'

describe('app1.vue', ()=>{
    it('訊息內容', ()=> {
        expect(app1.data().message).equal('Hello Vue!')
    })
})