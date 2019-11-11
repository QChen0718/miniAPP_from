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
  login:function(e){
    wx.switchTab({
      url: '../home/home',
    })
    console.log("登录按钮被点击");
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