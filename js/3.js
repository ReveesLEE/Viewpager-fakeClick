// 轮播图
// 每个网站包括苹果都有的轮播图组件(什么是组件)
/*
1，写一个 div 里面有 3 个 img 标签
2，只显示当前活动的 img 标签
3，加 1 个按钮，点击的时候切换图片
*/

var bindEventSlide = function() {
    var selector = '.gua-slide-button'
    bindAll(selector, 'click', function(event){
        console.log('click next')
        // 找到按钮
        var button = event.target
        // 求出下一个 index
        var index = nextIndex(button)
        // 切换到下一张图片和下一个小圆点
        showImage(index)
        // log('show before', index)
        showIndicator(index)
    })
}

var 定时播放 = function(){
    // 组合选择器
    var button = e('.gua-slide-button.gua-right')
    setInterval(function(){
        // 调用 click() 函数来模拟点击
        button.click()
    }, 3000)
}

var nextIndex = function(button) {
    // 找到 slide div
    var slide = button.parentElement
    // 得到图片总数和当前图片下标
    // parseInt 是一个把字符串转为数字的库函数
    var numberOfImgs = parseInt(slide.dataset.imgs)
    var activeIndex = parseInt(slide.dataset.active)
    // log('click slide', )
    // 求出下一张图片的 id
    var offset = parseInt(button.dataset.next)
    var index = (numberOfImgs + activeIndex + offset) % numberOfImgs
    // 设置父节点的 data-active
    slide.dataset.active = index
    return index
}

var showImage = function(index) {
    log('show image', index)
    // 得到下一张图片的选择器
    var nextSelector = '#id-guaimage-' + String(index)
    // 删除当前图片的 class 给下一张图片加上 class
    var className = 'gua-active'
    removeClassAll(className)
    var img = e(nextSelector)
    img.classList.add(className)
}

var showIndicator = function(index) {
    // log('show indi', index)
    // 得到下一个小圆点的选择器
    var nextSelector = '#id-indi-' + String(index)
    // 删除当前小圆点的 class 给下一个小圆点加上 class
    var className = 'gua-white'
    removeClassAll(className)
    var indi = e(nextSelector)
    indi.classList.add(className)
}

bindEventSlide()
定时播放()
