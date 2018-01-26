// pages/fullpage/fullpage.js
// 摇一摇公共方法
function Shake(fn, sensitive, timeGap) {
  var lastTime = new Date();
  var lastX = null, lastY = null, lastZ = null;
  var sensitive = sensitive || 50;  // 所需力度，xyz偏移值
  var timeGap = timeGap || 200;     // 两次之间时间间隔
  var isActive = true;
  wx.onAccelerometerChange(function (res) {
    if (!isActive) return;
    // res = res.accelerationIncludingGravity;
    var currentTime;
    var timeDifference;
    var deltaX = 0, deltaY = 0, deltaZ = 0;
    if ((lastX === null) && (lastY === null) && (lastZ === null)) {
      lastX = res.x; lastY = res.y; lastZ = res.z; return;
    }
    deltaX = Math.abs(lastX - res.x) * 100;
    deltaY = Math.abs(lastY - res.y) * 100;
    deltaZ = Math.abs(lastZ - res.z) * 100;
    if (((deltaX > sensitive) && (deltaY > sensitive)) ||
      ((deltaX > sensitive) && (deltaZ > sensitive)) ||
      ((deltaY > sensitive) && (deltaZ > sensitive))) {
      currentTime = new Date();
      timeDifference = currentTime.getTime() - lastTime.getTime();

      if (timeDifference > timeGap) {
        fn && fn(timeDifference);
        lastTime = new Date();
      }
    }
    lastX = res.x; lastY = res.y; lastZ = res.z;
  });
  return {
    stop: function () {
      isActive = false;
      wx.stopAccelerometer();
    }
  }
}
Page({
  data: {
    pageindex: 0,
    ciId: 'one', // 当前的currid
    isHidden: {
      one: false,
      two: true,
      three: true,
      four: true,
    },
    radioGroups: [{
      name: '男',
      checked: true,
      value: 'male'
    }, {
      name: '女神',
      checked: false,
      value: 'female'
    }],
    isShaking: false,
    labelData: {
      'commandcode': '07F0B424128941E5B64F3B9F889369A1',
      'commandvalue': '恭喜发财',
      'createdate': '2018-01-11 12:02:33',
      'createuser': '859D20A91F1947FA883A9E2AAA5C6A5C',
      'ext1': null,
      'ext2': null,
      'ext3': null,
      'id': '907678AB8C4D477DA38F7344ED9E2050',
      'remark': '循环|那首最爱的歌，|2018年依然|徜徉在耳边。',
      'updatedate': '2018-01-12 17:13:22',
      'updateuser': '859D20A91F1947FA883A9E2AAA5C6A5C'
    },
    paperText: [],
    shake: null
  },
  pageAnimationFinish (e) {
    console.info(this.data)
    Object.keys(this.data.isHidden).forEach(key => {
      this.setData({
        [`isHidden.${key}`]: this.data.ciId !== key,
        isShaking: false
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
    this.pageMoveTo('two')
  },
  // 开始抽签，发送抽签数据
  startLucky: function () {
    this.pageMoveTo('three')
  },
  // 抽签测试点击触发
  luckyShake: function () {
    this.setData({
      isShaking: true
    })
  },
  startShake: function () {
    let vm = this
    vm.shake = Shake(() => {
      // something
      setTimeout(function () {
        vm.setData({
          isShaking: true
        })
      }, 400)
    });
  },
  stopShake: function () {
    this.shake && this.shake.stop();
  },
  // 查看签文
  showLabelHandler: function () {
    this.pageMoveTo('four')
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
    // let ptxt = this.data.labelData.remark
    // let ptxtArr = ptxt.splite('|')
    let ldr = []
    let parr = []
    ldr = this.data.labelData.remark
    if (ldr) {
      parr = ldr.split('|')
      if (parr.length > 4) {
        let firstItm = `${parr[0]},${parr[1]}`
        parr.splice(0, 2, firstItm)
      }
      console.info(parr)
      parr.forEach((itm, idx) => {
        let itmArr = itm.split('')
        itmArr.forEach((subItm, subIdx) => {
          console.info(`${subItm}`)
          itmArr[subIdx] = `${subItm}`
        })
        parr[idx] = itmArr
      })
    } else {
      parr = []
    }
    console.info(parr)
    this.setData({
      paperText: [...parr]
    })
    
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
    this.startShake();
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