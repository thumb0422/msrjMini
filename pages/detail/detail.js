var app = getApp()
var datas = require('../../utils/detailData.js')
Page({
  data: datas,

  onLoad: function (options) {
    var that = this
    var detailId = options.id
    var datasArray = that.data.detailDatas.datas
    var len = datasArray.length
    for (let i = 0; i < len; i++) {
      var tempDataDic = datasArray[i]
      if (tempDataDic.id == detailId) {
        that.setData({
          id: detailId,
          imageUrl: tempDataDic.imageUrl
        })
        wx.setNavigationBarTitle({
          title: tempDataDic.title + '详情介绍',
        })
      }
    }

  }
})
