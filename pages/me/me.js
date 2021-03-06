// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    listData: [{ 'img': '../images/me/User_home@3x.png', 'name': '我的工作室' }, { 'img': '../images/me/User_register@3x.png', 'name': '理财师认证' }, { 'img': '../images/me/User_cyz@3x.png', 'name': '实名认证' }, { 'img': '../images/me/User_smrz@3x.png', 'name': '我的服务经理' }, { 'img': '../images/me/User_set@3x.png', 'name': '设置' }, { 'img': '../images/me/User_about@3x.png', 'name': '关于壹财富' }, { 'img': '../images/me/User_home@3x.png', 'name': '推荐朋友' }, { 'img': '../images/me/feedback@3x.png', 'name': '帮助与反馈' }, { 'img': '../images/me/MyOrderIcon@3x.png', 'name': '用户协议' }, { 'img': '../images/me/custormPhone@3x.png', 'name': '客服电话' }]
  },
  itemClick:function(e){
    console.log(e);
    if(e.target.id == 4){
      //跳转到设置页面
      wx.navigateTo({
        url: '../set/set',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = this.initData();
    this.setData({ array: array });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  initData: function () {
    var array = [];
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '交易设置';
    array[0] = object1;
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '金币商城';
    array[1] = object1;
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '优惠券';
    array[2] = object1;
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '我的客服';
    array[3] = object1;
    // var object1 = new Object();
    // object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    // object1.title = '债权基金';
    // array[4] = object1;
    // var object1 = new Object();
    // object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    // object1.title = '证券基金';
    // array[5] = object1;
    // var object1 = new Object();
    // object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    // object1.title = '一键报单';
    // array[6] = object1;
    // var object1 = new Object();
    // object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    // object1.title = '我的客服';
    // array[7] = object1;
    return array
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