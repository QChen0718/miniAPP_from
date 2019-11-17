// pages/product/product.js
const API = require('../../api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pagetitles:['最新','精选','集合信托','集合资管','债权基金','证券基金','国内保险'],
    currentTab:0
  },
  loadData:function(e){
    wx.request({
      url: 'https://m.maoyan.com/movie/list.json',
      data:{
        type:'hot',
        offset:0,
        limit:1000
      },
      method:'GET',
      success:function(res){
        console.log(res);
      },
      fail:function(){

      },
      complete:function(){

      }
    })
  },
  pageClick:function(e){
    var id = e.currentTarget.id;
    this.setData({
      currentTab:id
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadProductData();
  },
  loadProductData: function(e) {
    wx.request({
      url: API.newProductList,
      method:'POST',
      header:{
        "Accept-Version": "1.0.0",
        "Content-Type": "application\/json"
      },
      data:{
        "pageIndex": 1,
        "pageSize": 10,
        "version": "6.2.0",
        "productTypeId": "8",
        "channel": "1",
        "appKey": "ycfiosiplqs93zpd98qjhayrm",
        "userMobile": "18311055781",
        "timeStamp": "2019-11-16T21:30:54+0800",
        "userId": "1825829",
        "sign": "AA4F114CF4BB89D07C3F6C1FAB4E45F6",
        "apiVersion": "1.0.0"
      },
      success:function(res){
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