var app = getApp()
Page({
  data: {
    userInfo: {},
    userListInfo: [{
      icon: '../../images/other/iconfont-dingdan.png',
      text: '我的订单'
    },
    {
      icon: '../../images/other/iconfont-shouhuodizhi.png',
      text: '收货地址管理'
    }, 
    {
      icon: '../../images/other/iconfont-kefu.png',
      text: '联系客服'
    }, 
    {
      icon: '../../images/other/iconfont-help.png',
      text: '常见问题'
    }
    ]
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
  }
})