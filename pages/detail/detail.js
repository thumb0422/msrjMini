var app = getApp()
var datas = require('../../utils/detailData.js')
Page({
  data: datas,

  onLoad: function (options) {
    var that = this
    var detailId = options.id
    console.log('当前点击的是----', detailId)
    console.log(that.data)
    for (let i = 0; i < that.data.length; i++) {
      var tempDataDic = that.data[i]
      if (tempDataDic.id == detailId) {
        console.log('找到了----', tempDataDic)
        that.setData({
          id: detailId,
          imageUrl: tempDataDic.imageUrl
        })
      }
    }

  }
})
