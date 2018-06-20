// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mockData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestMockData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 生成测试数据 
   */
  requestMockData: function () {
    var that = this
    that.setData({
      mockData: [
        {
          id: "0001",
          title: "春季款",
          imgUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
        },
        {
          id: "0002",
          title: "夏季款",
          imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
        {
          id: "0003",
          title: "秋季款",
          imgUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
        },
        {
          id: "0004",
          title: "冬季款",
          imgUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
        },
        {
          id: "0005",
          title: "秋冬季款",
          imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
        },
      ],
    })
  }
})