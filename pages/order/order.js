// pages/order.js
const citySelector = requirePlugin('citySelector');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    barList: [
      {title: "附近门店", index: 0},
      {title: "常用/收藏", index: 1}
    ],
    currentLocation: {
      title: "中国"
    },
    isShowMap: true,
    index: 0,
    array: ["中国","法国","英国",]
  },
  swichNav(e) {
    this.setData({currentTab : e.currentTarget.id})
  },
  chooseArea: function() {
    // wx.navigateTo({
    //   url: `/pages/citySelector/citySelector?key=${key}&referer=${referer}&hotCitys=${hotCitys}`,
    // })
    const key = 'IPQBZ-OUML4-ABCUI-FAV75-CNKLZ-4ABI7'; // 使用在腾讯位置服务申请的key
    const referer = 'cbdao'; // 调用插件的app的名称
    const hotCitys = '北京,上海'; // 用户自定义的的热门城市
    wx.navigateTo({
      url: `plugin://citySelector/index?key=${key}&referer=${referer}&hotCitys=${hotCitys}`
    })  
  },
  searchMapLocation: function() {
    const key = 'IPQBZ-OUML4-ABCUI-FAV75-CNKLZ-4ABI7'; //使用在腾讯位置服务申请的key
    const referer = 'cbdao'; //调用插件的app的名称
    const location = JSON.stringify({
      latitude: 39.89631551,
      longitude: 116.323459711
    });
    const category = '生活服务,娱乐休闲';

    wx.navigateTo({
      url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
    });
  },
  hideMap() {
    this.setData({isShowMap: false})
  },
  showMap() {
    this.setData({isShowMap: true})
  },
  onShow() {
    const selectedCity = citySelector.getCity(); // 选择城市后返回城市信息对象，若未选择返回null
    if (!selectedCity) return
    this.setData({
      currentLocation: {
        title: selectedCity.name
      }
    })
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
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

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