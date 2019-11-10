// pages/mobile/mobile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    btnstate:"default",
    mobile:""
  },
  mobileblur:function(e){
    var content = e.detail.value;
    if(content!=""){
      this.setData({
        disabled:false,
        btnstate:"primary",
        mobile:content
      });
    }else{
      this.setData({
        disabled:true,
        btnstate:"default",
        mobile:""
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx:wx.setNavigationBarTitle({
    //   title: '手机快速注册',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
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