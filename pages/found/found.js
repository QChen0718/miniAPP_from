// pages/found/found.js
// require 引入方法
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    winWidth:0,
    winHeight:0,
    indicatorDots:false,
    autoplay:true,
    interval:5000,
    duration:1000,
    movies:['1','2','3','4','5','6','7'],
    imgUrls: ['https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640']
  },
  switchNav:function(e){
    var id = e.currentTarget.id;
    this.setData({
      currentTab:id
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page = this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res);
        page.setData({
          //屏幕的宽度
          winWidth:res.windowWidth
        });
        page.setData({
          //屏幕的高度
          winHeight:res.windowHeight
        });
      },
    });
    this.loadMovies();
  },
  // 加载电影列表数据
  loadMovies:function(){
    var page = this;
    // var key = util.getDataKey();
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?apikey=',
      method:'GET',
      header:{
        "Content-Type":"json"
      },
      success:function(res){
        console.log(res);
        var subjects = res.data.subjects;
        var size = subjects.length;//电影总数量
        //每行放置3个电影，计算出需要多少行
        var len = parseInt(size/3); 
        console.log(len);
        console.log(subjects);
        //赋值电影列表
        page.setData({
          movies:subjects
        });
        //设置电影内容高度
        page.setData({
          winHeight:(len+1)*230
        });
      },
      fail:function(res){
        console.log(res);
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

  }
})