//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    newsData: []
  },
  //事件处理函数
  loadData: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:3000/users', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data);
        that.setData({
          newsData: res.data
        })
      }
    })
  }
})
