Page({
  data: {

  },

  onShow: function () {

  },
  onLoad: function () {

  },
  onReady: function () {
    let tm = setInterval(() => {
      wx.switchTab({
        url: '../home/home',
        success: function () {
        }
      })
      clearInterval(tm)
    }, 1000)
  },
  onUnload: function () {

  }

})