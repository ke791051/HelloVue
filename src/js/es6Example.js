export default class myclass {
    constructor(){
        this.apikey = 'CWB-B95B9156-60B8-4F01-A757-A1045A68D4BD';
        this.dataid = 'F-C0032-001';
        this.url = `http://opendata.cwb.gov.tw/opendataapi?dataid=${this.dataid}&authorizationkey=${this.apikey}`;
    }
    es6(){
        let {bar, foo:foo1} = {foo1:'aaa', bar:'bbb'}
        let s = "今天天氣真好"
        let sRepeat = s.repeat(5)

        let num ='12'
        console.log(sRepeat)
    }
    ajaxData() {
        const promise = new Promise(((resolve, reject) => {
            function handler() {
                if (this.readyState !== 4) {
                return
                }
                if (this.status === 200) {
                resolve(this.response)
                } else {
                reject(new Error(this.statusText))
                }
            }

            const client = new XMLHttpRequest()
            client.open(this.type, this.url)
            client.onreadystatechange = handler
            client.responseType = this.dataType
            client.setRequestHeader('Access-Control-Allow-Origin', '*')
        }))
        return promise
    }
}