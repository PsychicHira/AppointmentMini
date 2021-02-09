// miniprogram/pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOpenId()

    let date = new Date()
    console.log(date)
  },

  aaa: function () {





    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.getUserInfo({
            success: function (res) {
              wx.authorize({
                scope: 'scope.userInfo',
                success() {
                  // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                  console.log(11111111111111)
                }
              })
            }
          })
        }
        console.log(res.authSetting)
      }
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

  },

  //自定义函数

  //获取openid
  getOpenId: function () {
    wx.login({
      success(res) {
        // console.log('res.code', res.code)
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            data: {
              //小程序唯一标识
              appid: 'wx2a21cfac5cd58f7e',
              //小程序的 app secret
              secret: 'befe57231ee30b09ff9d4a19efcd674b',
              js_code: res.code,
              //grant_type 固定写法格式
              grant_type: 'authorization_code'
            },
            success: (res) => {
              console.log(res.data.openid)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})