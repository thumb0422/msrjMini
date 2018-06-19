// pages/home/index.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    vertical: false,
    //获取到的数据
    headImgeDatas:[],
    sudokuDatas:[],
    venueslist:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    that.requestHeadData();
    that.requestSudokuData();
    that.requestContentData();
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
    var that = this
    that.requestHeadData();
    that.requestSudokuData();
    that.requestContentData();
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
   * 获取顶部数据
   */
  requestHeadData:function(){
    console.log('requestHeadData')
    var that = this
    that.setData({
      headImgeDatas: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
    })
  },

  /**
   * 获取九宫格数据
   */
  requestSudokuData: function () {
    console.log('requestSudokuData')
    /**
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
    */
    var that = this
    that.setData({
      sudokuDatas:
      [
        { "id": "1", "title": "Test1" },
        { "id": "2", "title": "Test2" },
        { "id": "3", "title": "Test3" },
        { "id": "4", "title": "Test4" },
        { "id": "5", "title": "Test5" },
        { "id": "6", "title": "Test6" },
        { "id": "7", "title": "Test7" },
        { "id": "8", "title": "Test8" },
      ]
    })
  },

  /**
   * 获取content数据
   */
  requestContentData: function () {
    console.log('requestContentData')
    var that = this
    that.setData({
      venueslist: [
        {
          "id": "0001", "title": "春季款", "datas": [
            { "id": "00010001", "title": "春季款001", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": "00010002", "title": "春季款002", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": "00010003", "title": "春季款003", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": "00010004", "title": "春季款004", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": "00010005", "title": "春季款005", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": "00010006", "title": "春季款006", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
          ]
        },
        {
          "id": "0002", "title": "夏季款", "datas": [
            { "id": "00020001", "title": "夏季款1", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": "00020002", "title": "夏季款2", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": "00020003", "title": "夏季款3", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": "00020004", "title": "夏季款4", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": "00020005", "title": "夏季款5", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": "00020006", "title": "夏季款6", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": "00020007", "title": "夏季款7", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
          ]
        },
        {
          "id": "0003", "title": "秋季款", "datas": [
            { "id": "00030001", "title": "秋季款1", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" },
            { "id": "00030002", "title": "秋季款2", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" },
            { "id": "00030003", "title": "秋季款3", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" },
          ]
        },
        {
          "id": "0004", "title": "冬季款", "datas": [
            { "id": "00040001", "title": "冬季款1", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": "00040002", "title": "冬季款2", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" },
            { "id": "00040003", "title": "冬季款3", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": "00040004", "title": "冬季款4", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": "00040005", "title": "冬季款5", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" },
            { "id": "00040006", "title": "冬季款6", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": "00040007", "title": "冬季款7", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg" },
            { "id": "00040008", "title": "冬季款8", "discount": "8折", "imgUrl": "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg" },
            { "id": "00040009", "title": "冬季款9", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
            { "id": "00040010", "title": "冬季款10", "discount": "8折", "imgUrl": "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg" },
          ]
        },
      ],
    })
  },
})