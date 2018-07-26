const puppeteer = require('puppeteer')

class Browser {
    constructor(config){
        this.browser = null
        this.isShow = true
    }
    async init() {
        this.browser = await puppeteer.launch({
            headless : this.isShow
        })
        return Promise.resolve(this.browser.newPage()) 
    }
}
module.exports = Browser