// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    btnstate:"default",
    account:"",
    password:""
  },
  accountInput:function(e){
    var content = e.detail.value;
    console.log(content);
    if(content!=""){
      this.setData({
        disabled:false,
        btnstate:"primary",
        account:content
      });
    }else {
      this.setData({
        disabled:true,
        btnstate:"default"
      });
    }
  },
  pwdBlur:function(e){
    var password = e.detail.value;
    if(password!=""){
      this.setData({
        password:password
      });
    }
  },
  formSubmit: function (e) {
    console.log(e.detail.value);
    this.loginRequest(e.detail.value);
  },
  //调用登录接口
  loginRequest:function(e){
    console.log(e)
    wx.request({
      url: 'https://test-api4app.1caifu.com/api/User/userlogin',
      method:'POST',
      data:{
        "apiVersion": "1.0.0",
        "timeStamp": "2019-11-15T17:00:32+0800",
        "loginType": "0",
        "version": "6.2.0",
        "channel": "1",
        "userName": e.loginName,
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "appKey": "ycfiosiplqs93zpd98qjhayrm",
        "sign": "A07FB1648112AC97A1E2DD89146B08AA"
      },
      success:function(resc){
        console.log(resc);
        if (resc.data.code == 0){
          wx.switchTab({
            url: '../home/home',
          });
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 2000
          });
          //本地存储用户信息
          wx.setStorage({
            key: 'user',
            data: resc.data.data,
            success:function(e){
              console.log(e);
            }
          })
        }else{
          wx.showToast({
            title: resc.data.errMsg,
            icon: 'none',
            duration: 2000
          });
        } 
      }
    })
  },
  loginphone:function(e){
    wx.navigateTo({
      url: '../mobile/mobile',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  logincompany:function(e){
    wx.navigateTo({
      url: '../compnay/company',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
})