// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currCont: [],
    content: {
      wzjs: [{
        src: '../../images/banner_1.jpg',
        title: '网站建设',
        subtitle: '专业的建设团队',
        content: '网站建设介绍，网站建设网站建设介绍，网站建设'
      }],
      wxkf: [{
        src: '../../images/banner_1.jpg',
        title: '微信开发',
        subtitle: '专业的微信开发团队',
        content: '微信开发介绍，微信开发微信开发介绍，微信开发'
      }],
      xcxkf: [{
        src: '../../images/banner_1.jpg',
        title: '小程序开发',
        subtitle: '专业的小程序开发团队',
        content: '小程序开发介绍，小程序开发小程序开发介绍，小程序开发'
      }],
      sjzd: [{
        src: '../../images/banner_1.jpg',
        title: '手机站点',
        subtitle: '专业的手机站点建设团队',
        content: '手机站点介绍，手机站点手机站点介绍，手机站点'
      }],
      hdym: [{
        src: '../../images/banner_1.jpg',
        title: 'h5活动页面',
        subtitle: '专业的h5页面开发团队',
        content: 'h5活动页面介绍，h5活动页面h5活动页面介绍，h5活动页面'
      }],
      xtkf: [{
        src: '../../images/banner_1.jpg',
        title: '中后台系统开发',
        subtitle: '专业的中后台系统开发团队',
        content: '中后台系统开发介绍，中后台系统开发中后台系统开发介绍，中后台系统开发'
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info(options)
    wx.setNavigationBarTitle({
      title: options.title
    })
    this.setData({
      currCont: this.data.content[options.type]
    })
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