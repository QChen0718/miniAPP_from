// pages/home/home.js
const API = require('../../api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dots:true, //显示指示面板
    color:"gray", //默认指示显示颜色
    active_color:"white", //选中指示显示颜色
    autoplay:true,//是否自动播放
    circular:true,//是否衔接滑动
    current:0, //当前所在的
    interval:2000, //自动切换时间间隔
    duration:800, //动画时长
    array:[],
    productArray:[],
    bannerArray:[],
    hottopArray:[]
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var array = this.initData();
    this.setData({ array: array });
    this.loadProductData();
    this.loadBannerData();
    this.loadHotTopData();
  },
  //首页获取banner信息接口
  loadBannerData:function(){
    var page = this;
    wx.request({
      url: API.homebannerData,
      method:'POST',
      header:{
        "Accept-Version": "2.1.0",
        "Content-Type": "application\/json"
        },
      data:{
        sign: "631E2C04CC84EDAF7B695C2B205E1A7A",
        channel: "1",
        timeStamp: "2019-11-14T17:04:12+0800",
        apiVersion: "2.1.0",
        appKey: API.appKey,
        version: "6.2.0",
        type: 13
      },
      success:function(res){
        console.log('---->',res)
        var dataArray = res.data.data;
        page.setData({
          bannerArray: dataArray
        });
      }
    })
  },
  //首页获取热点专题接口
  loadHotTopData:function(){
    var page = this;
    wx.request({
      url: API.homehottopData,
      method:'POST',
      header:{
        "Accept-Version": "1.0.0",
        "Content-Type": "application\/json"
      },
      data:{
        "userMobile": "15921488001",
        "pageSize": 10,
        "apiVersion": "1.0.0",
        "version": "6.2.0",
        "pageIndex": 1,
        "userId": "23087",
        "sign": "BC18D0A1502097D0B94E9CDD36D21499",
        "channel": "1",
        "appKey": API.appKey,
        "timeStamp": "2019-11-14T17:04:12+0800"
      },
      success: function (res) {
        console.log(res.data.data);
        var dataArray = res.data.data;
        page.setData({
          hottopArray:dataArray
        });
      }
    })
  },
  //首页获取产品列表接口
  loadProductData:function(){
    var page = this;
    
    wx.request({
      url: API.appProductList,
      method:'POST',
      header:{
        'Content-Type':'application\/json',
        'Accept-Version':'1.0.0'
      },
      data:{
        timeStamp: "2019-11-14T17:04:12+0800",
        userId: "23087",
        sign: "BC18D0A1502097D0B94E9CDD36D21499",
        apiVersion: "1.0.0",
        version: "6.2.0",
        appKey: API.appKey,
        pageSize: 10,
        channel: "1",
        userMobile: "15921488001",
        type: 100
      },
      success: function (res) {
        console.log(res.data.data);
        var dataArray = res.data.data;
        page.setData({
          productArray:dataArray
        });
      }
    })
  },
  initData: function () {
    var array = [];
    var object1 = new Object();
    object1.img = '../images/home/Home_new@3x.png';
    object1.title = '最新';
    array[0] = object1;
    var object1 = new Object();
    object1.img = '../images/home/Home_hot@3x.png';
    object1.title = '精选';
    array[1] = object1;
    var object1 = new Object();
    object1.img = '../images/home/Home_Trust@3x.png';
    object1.title = '集合信托';
    array[2] = object1;
    var object1 = new Object();
    object1.img = '../images/home/Home_Capital@3x.png';
    object1.title = '集合资管';
    array[3] = object1;
    var object1 = new Object();
    object1.img = '../images/home/Home_Private@3x.png';
    object1.title = '债权基金';
    array[4] = object1;
    var object1 = new Object();
    object1.img = '../images/home/Home_PEVC@3x.png';
    object1.title = '证券基金';
    array[5] = object1;
    var object1 = new Object();
    object1.img = '../images/home/Home_Order@3x.png';
    object1.title = '一键报单';
    array[6] = object1;
    var object1 = new Object();
    object1.img = '../images/home/Home_Service@3x.png';
    object1.title = '我的客服';
    array[7] = object1;
    return array
  },
  // 轮播图滚动后会触发 bindChange 方法
  // bindChange: function (e) {
  //   console.log(e.detail);
  // },
  itemClick:function(e){
    console.log(e.currentTarget.id);

  },
  filterClick:function(e){
    console.log('筛选按钮被点击');
  },
  jumpSearchPage:function(e){
    console.log('跳转搜索页面');
    wx.navigateTo({
      url: '../search/search',
    })
  },
  messageClick:function(e){
    console.log('消息按钮被点击');
  },
  hotClick:function(e){
    
    //跳转到专题详情页面
    var hoturl = e.currentTarget.dataset.hottop.url;
    console.log(hoturl);
    wx.navigateTo({
      url: '../hottopDetail/hottopDetail?url=' + hoturl
    });
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