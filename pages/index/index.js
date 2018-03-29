//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: true  // loading
  },

  //事件处理函数
  swiperchange: function (e) {
    //console.log(e.detail.current)
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    //topBanner
    that.setData({
      images: [
        { "id": 1, "name": "Top1", "orders": 1, "picurl": "../../images/index/TopBanner/110.png"},
        { "id": 2, "name": "Top2", "orders": 2, "picurl": "../../images/index/TopBanner/111.png"},
        { "id": 3, "name": "Top3", "orders": 3, "picurl": "../../images/index/TopBanner/112.png"},
        { "id": 4, "name": "Top4", "orders": 4, "picurl": "../../images/index/TopBanner/113.png"},
      ]
    })

    //ChineseItems中国风
    that.setData({
      ChineseItems: [
        { "id": 1, "name": "夏季棉麻", "orders": 1, "pic": "../../images/index/Chinese/210.png" },
        { "id": 2, "name": "精品提花布帘", "orders": 2, "pic": "../../images/index/Chinese/211.png" },
        { "id": 3, "name": "精品提花布帘纱", "orders": 3, "pic": "../../images/index/Chinese/212.png" },
        { "id": 4, "name": "炎夏圣品", "orders": 4, "pic": "../../images/index/Chinese/213.png" },
      ]
    })

    //EuropeanItems
    that.setData({
      EuropeanItems: [
        { "id": 1, "name": "初夏尚新", "orders": 1, "pic": "../../images/index/European/310.png" },
        { "id": 2, "name": "相约遮光季", "orders": 2, "pic": "../../images/index/European/311.png" },
        { "id": 3, "name": "地中海风情", "orders": 3, "pic": "../../images/index/European/312.png" },
        { "id": 4, "name": "棉麻风格", "orders": 4, "pic": "../../images/index/European/313.png" },
      ]
    })
  }
})
