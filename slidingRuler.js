export default class SlidingRuler{
     options = null

    constructor(dom) {
        this.init(dom)
        console.log(this.options)
    }
    
    // 初始化方法
    init(dom) {

        const uiDom = document.createElement('ui')
        uiDom.className = 'sliding-content'
        const fragmentDom = document.createDocumentFragment()
        for(var slidingRulerItem = 0; slidingRulerItem < 1000; slidingRulerItem++) {
            var liDom = document.createElement('li')
            // liDom.innerText = slidingRulerItem
            liDom.className = 'sliding-item'
            if (!((slidingRulerItem + 1) % 5)) {
                liDom.className = 'sliding-item sliding-item-long'
            }
            fragmentDom.appendChild(liDom)
        }
        uiDom.appendChild(fragmentDom)
        dom.className = 'sliding-container'
        dom.appendChild(uiDom)
    }
}