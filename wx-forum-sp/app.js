//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    testData:[
      {
        title:'this is title one',
        content:'this is test content one, always less content, hope everything is fine'
      },
      {
        title: 'this is title two',
        content: 'this is test content two, maybe the word is getting bad, hope I can arrive in the destination, time is not enough!'
      },
      {
        title: 'this is title three',
        content: 'this is test content three, hope one day, I can get what I want.'
      },
      {
        title: 'this is title four',
        content: 'this is test content four, maybe it is late for me, but I can do nothing.'
      }
    ]
  }
})