// pages/list/index.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftDatas: [],
    rightDatas: [],
    rightFilterDatas: [],
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
    this.setData({
      leftDatas: [{
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
        title: "秋冬季款5",
        imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        id: "0006",
        title: "秋冬季款6",
        imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        id: "0007",
        title: "秋冬季款7",
        imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        id: "0008",
        title: "秋冬季款8",
        imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        id: "0009",
        title: "秋冬季款9",
        imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        id: "0010",
        title: "秋冬季款10",
        imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        id: "0011",
        title: "秋冬季款11",
        imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      ],

      rightDatas: [{
        id: "0001",
        title: "春季款001",
      },
      {
        id: "0001",
        title: "春季款002",
      },
      {
        id: "0003",
        title: "春季款003",
      },
      {
        id: "0003",
        title: "春季款004",
      },
      {
        id: "0003",
        title: "春季款005",
      },
      {
        id: "0005",
        title: "春季款006",
      },
      {
        id: "0006",
        title: "春季款007",
      },
      {
        id: "0006",
        title: "春季款008",
      },
      {
        id: "0006",
        title: "春季款009",
      },
      {
        id: "0006",
        title: "春季款010",
      },
      {
        id: "0006",
        title: "春季款011",
      },
      {
        id: "0006",
        title: "春季款012",
      },
      {
        id: "0006",
        title: "春季款013",
      },
      {
        id: "0009",
        title: "春季款014",
      },
      {
        id: "0009",
        title: "春季款015",
      },
      {
        id: "0009",
        title: "春季款016",
      },
      {
        id: "0009",
        title: "春季款017",
      },
      {
        id: "0009",
        title: "春季款018",
      },
      {
        id: "0009",
        title: "春季款019",
      },
      {
        id: "0009",
        title: "春季款020",
      },
      {
        id: "0009",
        title: "春季款021",
      },
      ]
    })
  },
  
  leftClick: function (e) {
    var that = this
    let leftDataId = e.currentTarget.dataset['id']
    console.log(leftDataId)
    console.log('that.rightDatas = ', that.rightDatas)
    console.log('this.rightDatas = ', this.rightDatas)
    let filterData = util.JsonArrayFilter(that.data.rightDatas, leftDataId)
    console.log(filterData)
    that.setData({
      rightFilterDatas: filterData
    })
  },

})