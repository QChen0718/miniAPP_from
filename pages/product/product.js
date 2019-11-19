// pages/product/product.js
const API = require('../../utils/api.js')
const HTTP = require('../../utils/http.js')
let pageStart = 0;
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    pagetitles:['最新','精选','集合信托','集合资管','债权基金','证券基金','国内保险'],
    currentTab:0,
    newproductData:[],
    winHeight:0,
    categoryData: [
      {
        name: "最新",
        requesting: false,
        end: false,
        emptyShow: false,
        page: pageStart,
        listData: []
      },
      {
        name: "精选",
        requesting: false,
        end: false,
        emptyShow: false,
        page: pageStart,
        listData: []
      },
      {
        name: "集合信托",
        requesting: false,
        end: false,
        emptyShow: false,
        page: pageStart,
        listData: []
      },
      {
        name: "集合资管",
        requesting: false,
        end: false,
        emptyShow: false,
        page: pageStart,
        listData: []
      },
      {
        name: "债权基金",
        requesting: false,
        end: false,
        emptyShow: false,
        page: pageStart,
        listData: []
      },
      {
        name: "证券基金",
        requesting: false,
        end: false,
        emptyShow: false,
        page: pageStart,
        listData: []
      },
      {
        name: "国内保险",
        requesting: false,
        end: false,
        emptyShow: false,
        page: pageStart,
        listData: []
      }
    ]
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
    var self = this;
    self.getWindowHeight();

    self.loadProductData({
      url:API.newProductList,
      version:"1.0.0",
      method:'POST',
      productTypeId:"8"
    });
  },
  //获取窗口高度的方法
  getWindowHeight:function(e){
    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log('窗口高度', res.windowHeight);
        self.setData({
          // 41 是title的高度
          winHeight: res.windowHeight - 41
        });
      },
      fail: function (res) {
        console.log('---->', res);
      }
    })
  },
  // 轮播图滑动后会触发该方法
  bindchange:function(e){
    console.log('当前索引位置',e);
    let that = this;
    var currenturl;
    var productTypeid;
    var version;
    that.setData({
      currentTab:e.detail.current
    });
    if(e.detail.current==0){
      //最新
      currenturl = API.newProductList;
      productTypeid = "8";
      version = "1.0.0";
    }else if(e.detail.current == 1){
      //精选
      currenturl = API.hotProductList;
      productTypeid = "9";
      version = "1.0.0";
    }else if(e.detail.current == 5){
      //证券基金
      currenturl = API.securityFundList;
      version = "2.0.0";
      productTypeid = "4"
    }
    else{
      currenturl = API.productList;
      version = "2.0.0";
      productTypeid = e.detail.current-1;
    }
    that.loadProductData({
      url: currenturl,
      method:'POST',
      version:'1.0.0',
      productTypeId: productTypeid
    })
  },
  //加载最新产品列表数据
  loadProductData: function(e) {
    let that = this;
    wx.showNavigationBarLoading();
    let end = that.data.categoryData[0].end = true;
    let pageData = this.getCurrentData();
    //开始加载，指示器开始显示加载
    pageData.requesting = true;
    this.setCurrentData(pageData);
    HTTP.httprequest({
      url:e.url,
      param: {
        "pageIndex": 1,
        "pageSize": 10,
        "version": "6.2.0",
        "productTypeId": e.productTypeId,
        "channel": "1",
        "appKey": "ycfiosiplqs93zpd98qjhayrm",
        "userMobile": "18311055781",
        "timeStamp": "2019-11-16T21:30:54+0800",
        "userId": "1825829",
        "sign": "AA4F114CF4BB89D07C3F6C1FAB4E45F6",
        "apiVersion": e.version
      },
      apiversion:e.version,
      method:e.method,
      
      success:function(data){
        console.log(data.data);
        that.setData({
          newproductData: data.data,
        });
        pageData.listData = that.data.newproductData;
        pageData.end = false;
        pageData.requesting = false;
        that.setCurrentData(pageData);
        wx.hideNavigationBarLoading();
      }
    })
  },
  //刷新
  refresh:function(){
    console.log('-----------', this.data.currentTab);
    let that = this;
    var currenturl;
    var productTypeid;
    var version;
    //获取data里面的变量值
    if (this.data.currentTab == 0) {
      //最新
      console.log('最新');
      currenturl = API.newProductList;
      productTypeid = "8";
      version = "1.0.0";
    } else if (this.data.currentTab == 1) {
      //精选
      console.log('精选');
      currenturl = API.hotProductList;
      productTypeid = "9";
      version = "1.0.0";
    } else if (this.data.currentTab == 5) {
      //证券基金
      console.log('证券基金');
      currenturl = API.securityFundList;
      version = "2.0.0";
      productTypeid = "4"
    }
    else {
      currenturl = API.productList;
      version = "2.0.0";
      productTypeid = this.data.currentTab - 1;
    }
    that.loadProductData({
      url: currenturl,
      method: 'POST',
      version: '1.0.0',
      productTypeId: productTypeid
    })
  },
  //加载更多
  more:function(){

  },
  //更新页面数据
  setCurrentData: function (pageData) {
    let categoryData = this.data.categoryData
    categoryData[this.data.currentTab] = pageData
    this.setData({
      categoryData:categoryData
    })
  },
  //获取当前页面的数据
  getCurrentData:function(){
    return this.data.categoryData[this.data.currentTab]
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
    //在标题栏中显示加载
    
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