// pages/fullpage/fullpage.js
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
    pageindex: 0,
    ciId: 'red', // 当前的currid
    isHidden: {
      red: false,
      yellow: true,
      blue: true,
      green: true,
    },
    radioGroups: [{
      name: '男',
      checked: true,
      value: 'male'
    }, {
      name: '女神',
      checked: false,
      value: 'female'
    }]
  },
  pageAnimationFinish (e) {
    console.info(this.data)
    Object.keys(this.data.isHidden).forEach(key => {
      this.setData({
        [`isHidden.${key}`]: this.data.ciId !== key
      })
    })
  },
  pageChange: function (e) {
    console.info(e)
    this.setData({
      ciId: e.detail.currentItemId,
      [`isHidden.${e.detail.currentItemId}`]: false
    })
  },
  // 编程式触发 移动到某个节点 pid 节点的item-id
  pageMoveTo: function (pid) {
    let params = {
      detail: {
        currentItemId: pid
      }
    }
    this.pageChange(params)
  },
  // 进入抽签
  intoLucky: function () {
    this.pageMoveTo('yellow')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.info(options)
    // wx.setNavigationBarTitle({
    //   title: options.title
    // })
    // this.setData({
    //   currCont: this.data.content[options.type]
    // })
    
  },
  fullPageTouch: function (e) {
    // console.info(PageOptions)
    // window.removeEventListener('touch')
    // e.preventDefault
    // e.stopPropagation
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