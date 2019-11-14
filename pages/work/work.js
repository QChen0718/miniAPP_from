// pages/work/work.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nums: [{ 'shuzi': '377,200.00', 'name': '累计费用(元)' }, { 'shuzi': '3,940', 'name': '累计交易额' },{ 'shuzi': '2', 'name': '累计客户' }],

    array: [{ 'img': '../images/work/AppointmentIcon@3x.png', 'title': '预约中' }, { 'img': '../images/work/contractIcon@3x.png', 'title': '申请合同' }, { 'img': '../images/work/declarationIcon@3x.png', 'title': '待报单' }, { 'img': '../images/work/CheckIcon@3x.png', 'title': '待审核' }, { 'img': '../images/work/declarationSuccessIcon@3x.png', 'title': '报单成功' }, { 'img': '../images/work/jieyong@3x.png', 'title': '待结佣' }, { 'img': '../images/work/jieyong@3x.png', 'title': '结佣成功' }, { 'img':'../images/work/junctionFailIcon@3x.png','title':'失败'}],

    menus: [{ 'title': '便捷交易', 'array': [{ 'img': '../images/work/holder_icon@3x.png', 'title': '持有产品' }, { 'img': '../images/work/order_icon@3x.png', 'title': '一键报单' }, { 'img': '../images/work/contract_icon@3x.png', 'title': '我的合同' }] }, { 'title': '我和客户', 'array': [{ 'img': '../images/work/client_icon@3x.png', 'title': '我的客户' }, { 'img': '../images/work/schedule_icon@3x.png', 'title': '我的日程' }, { 'img': '../images/work/im_icon@3x.png', 'title': '在线消息' }] }, { 'title': '找产品', 'array': [{ 'img': '../images/work/subscribe_icon@3x.png', 'title': '产品订阅' }, { 'img': '../images/work/collect_icon@3x.png', 'title': '收藏产品' }, { 'img': '../images/work/history_icon@3x.png', 'title': '我的足迹' }] }, { 'title': '获客利器', 'array': [{ 'img': '../images/work/statistics_icon@3x.png', 'title': '数据统计' }, { 'img': '../images/work/infomation_icon@3x.png', 'title': '精选文章' }, { 'img': '../images/work/myCardIcon@3x.png', 'title': '我的名片' }, { 'img': '../images/work/bind_icon@3x.png', 'title': '客户绑定' }] }, { 'title': '线上工作室', 'array': [{ 'img': '../images/work/move_work_icon@3x.png', 'title': '移动工作室' }, { 'img': '../images/work/visitor_history@3x.png', 'title': '访客记录' }] }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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