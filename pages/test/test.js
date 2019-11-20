Page({
  data: {
    motto: 'Hello World',
  },
  start: function () {
    var animation = wx.createAnimation({
      duration: 4000,
      timingFunction: 'ease',
      delay: 1000
    });
    animation.opacity(0.2).translate(-100, -100).step()
    this.setData({
      ani: animation.export()
    })
  }
})