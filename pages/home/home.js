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
    tops: [{ 'imgurl': 'https://rescdn.xiaohu.in/Upload\/News\/20190603\/2738c1d7e4a74a8f8aa9204e4851e8f4.jpg', 'title': '一文读懂资管计划' }, { 'imgurl': 'https://rescdn.xiaohu.in/Upload\/News\/20180906\/8895b93f8f2c43c2863871a269c5e478.jpg', 'title': '经济是如何运行的' }, { 'imgurl': 'https://rescdn.xiaohu.in/Upload\/News\/20180418\/85252a9305394049bd7cac08ff01df32.jpg', 'title': '一图带你轻松看懂金交所' }, { 'imgurl': 'https://rescdn.xiaohu.in/Upload\/News\/20180329\/67947b54691d40a79c503adf243558ac.jpg', 'title': '私募股权投资' }, { 'imgurl': 'https://rescdn.xiaohu.in/Upload\/News\/20180323\/3d40239302344ca2a9308ce2a09c2118.jpg', 'title': '人工智能四大优势' }, { 'imgurl': 'https://rescdn.xiaohu.in/Upload\/News\/20180315\/bf123ef488c34258a41160a51c4476e8.jpg', 'title': '理财师如何为客户配置资产' }, { 'imgurl': 'https://rescdn.xiaohu.in/Upload\/News\/20180306\/754a7d4541344160b49366b727db15de.jpg', 'title': '私募投资避雷指南' }, { 'imgurl': 'https://rescdn.xiaohu.in/Upload\/News\/20180227\/cba4720c0a7a4e2c9ba508319b0be6af.jpg', 'title': '人工智能' }, { 'imgurl': 'https://rescdn.xiaohu.in/Upload\/News\/20180201\/0f2158154bd34cb5a9e0d65d905a209c.jpg', 'title': '刘鹤世界经济论坛致辞' }, { 'imgurl': 'https://rescdn.xiaohu.in/Upload\/News\/20180129\/742ca390743447c89bbd1e66fcef1dbd.jpg', 'title': '非标私募何去何从' }],
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
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '债权基金';
    array[4] = object1;
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '证券基金';
    array[5] = object1;
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
    object1.title = '一键报单';
    array[6] = object1;
    var object1 = new Object();
    object1.img = 'https://dimg04.c-ctrip.com/images/700u0r000000gxvb93E54_810_235_85.jpg';
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