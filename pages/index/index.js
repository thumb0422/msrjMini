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
    indexTmpData: indexDatas
  },
  //事件处理函数
  swiperchange: function (e) {
    //console.log(e.detail.current)
  },

  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    var datasArray = that.data.indexTmpData.indexDatas.datas
    var images = datasArray[0].data

    that.setData({
      topContents: images
    })
    var tempData = []
    for (let i = 1; i < datasArray.length; i++) {
      tempData.push(datasArray[i])
    }
    that.setData({
      productsDatas: tempData
    })
  }
})
