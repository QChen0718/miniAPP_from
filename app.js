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
        console.log('登录')
        //跳转到首页
        this.checkLogin()
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
  //校验是显示登录页面，还是显示首页
  checkLogin:function(){
   var user = wx.getStorageSync('user');
   console.log(user);
   //Object.keys()这个方法通过判断它的长度来知道它是否为空
  //  判断对象是否为空
   if(Object.keys(user).length!=0){
     console.log('方法执行');
     wx.switchTab({
       url: 'pages/home/home',
     })
   }
  },

  globalData: {
    userInfo: null
  }
  
})