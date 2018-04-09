var app = getApp()
// datas = require('detail.json')
Page({
  data: {
    "id": "010101",
    "title": "伊妮德",
    "chs": "伊妮德",
    "eng": "",
    "index": "1",
    "imageUrl": "../../images/detail/ynd.jpg"
  },

  onLoad: function (options) {
    var that = this
    console.log('当前点击的是----', options.id)
    that.setData({
      id: options.id,
      imageUrl: this.data.imageUrl
    })
  }
})
