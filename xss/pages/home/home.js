// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabActive: 0,
    active: 0
  },
  onChange(event) {
    console.log(event.detail);
    if (event.detail === 0) {
      wx.navigateTo({
        url: '../home/home'
      })
    }
    if (event.detail === 1) {
      wx.navigateTo({
        url: '../service/service'
      })
    }
    if (event.detail === 2) {
      wx.navigateTo({
        url: '../recode/recode'
      })
    }
    if (event.detail === 3) {
      wx.navigateTo({
        url: '../personcenter/personcenter',
      })
    }
  },
  jumpCont: function () {
    console.log(123)
    wx.navigateTo({
      url: '../tempchang/tempchang'
    })
  },
  onChangeTab(event) {
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})