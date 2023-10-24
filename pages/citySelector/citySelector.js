// pages/citySelector/citySelector.js
const citySelector = requirePlugin('citySelector');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow() {
    const selectedCity = citySelector.getCity(); // 选择城市后返回城市信息对象，若未选择返回null
  },
  onUnload () {
    // 页面卸载时清空插件数据，防止再次进入页面，getCity返回的是上次的结果
    citySelector.clearCity();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})