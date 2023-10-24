// index.js
// 获取应用实例
const app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    background: [
      'https://img.zcool.cn/community/01ae385c31a38aa80121df90a70d6f.jpg@3000w_1l_0o_100sh.jpg',
      'https://tse2-mm.cn.bing.net/th/id/OIP-C.NHFj8ekQR5__V2MyK8U9hgHaE8?pid=ImgDet&rs=1',
      'https://tse2-mm.cn.bing.net/th/id/OIP-C.WaON72rYgJf0_ua-LdTuDQHaFj?pid=ImgDet&rs=1'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    categories: [],
    nav2List: [{
      id: '1',
      name: '积分商城',
      icon: "../../assets/img/homePage/integral.png"
    },
    {
      id: '2',
      name: '社群福利',
      icon: "../../assets/img/homePage/welfare.png"
    },
    {
      id: '3',
      name: '团餐',
      icon: "../../assets/img/homePage/groups.png"
    },
    {
      id: '4',
      name: '礼券兑换',
      icon: "../../assets/img/homePage/ticket.png"
    }]
  },

  onLoad() {
    this.setData({
      categories: [{
        id: 1,
        orderType: '自取',
        desc: '即刻点单',
        icon: '../../assets/img/homePage/dine-in.png'
      },{
        id: 2,
        orderType: '外卖',
        desc: '无接触配送',
        icon: '../../assets/img/homePage/takeaway.png'
      }]
    });
  },

  // changeIndicatorDots() {
  //   this.setData({
  //     indicatorDots: !this.data.indicatorDots
  //   })
  // // },

  // changeAutoplay() {
  //   this.setData({
  //     autoplay: !this.data.autoplay
  //   })
  // },

  // intervalChange(e) {
  //   this.setData({
  //     interval: e.detail.value
  //   })
  // },

  // durationChange(e) {
  //   this.setData({
  //     duration: e.detail.value
  //   })
  // }
  tabClick(e) {
   
    
  }
})



