// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    tags:['在售','类固定资产','基础设施类','征信类'],
    dots:true, //显示指示面板
    color:"gray", //默认指示显示颜色
    active_color:"white", //选中指示显示颜色
    autoplay:true,//是否自动播放
    circular:true,//是否衔接滑动
    current:0, //当前所在的
    interval:2000, //自动切换时间间隔
    duration:800, //动画时长
    array:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = this.initData();
    this.setData({ array: array });
  },
  initData: function () {
    var array = [];
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '最新';
    array[0] = object1;
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '精选';
    array[1] = object1;
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '集合信托';
    array[2] = object1;
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '集合资管';
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
  // 轮播图滚动后会触发 bindChange 方法
  // bindChange: function (e) {
  //   console.log(e.detail);
  // },
  itemClick:function(e){
    console.log(e.currentTarget.id);

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