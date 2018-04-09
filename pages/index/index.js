//获取应用实例
var app = getApp()
var indexDatas = require('../../utils/indexData.js')
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: true,
    indexTmpData:indexDatas
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
    var images = []
    var ClassicItems = []
    var ChineseItems = []
    var EuropeanItems = []
    console.log('data = ', that.data)
    var datasArray = that.data.indexTmpData.indexDatas.datas
    console.log('indexDatas = ',datasArray)

    var len = datasArray.length
    console.log('len = ', len)
    for (let i = 0; i < len; i++) {
      var tempDataDic = datasArray[i]
      console.log('++++', tempDataDic)
      console.log('++++key', tempDataDic.keys)
      if (tempDataDic.key == "top"){
        console.log('top', tempDataDic)
      } else if (tempDataDic.key == "classic"){
        console.log('classic', tempDataDic)
      }
    }

    //topBanner
    that.setData({
      images: images
    })

    //ClassicItems经典款
    that.setData({
      ClassicItems: ClassicItems
    })

    //ChineseItems中国风
    that.setData({
      ChineseItems: ChineseItems
    })

    //EuropeanItems
    that.setData({
      EuropeanItems: EuropeanItems
    })
  }
})
