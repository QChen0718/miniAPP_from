// pages/sift/sift.js
Page({
  data:{
    // right: -580,
    // alpha:0,
    // ishidden:true,
    isRuleTrue:false,
    animation:null
  },
  onLoad: function () {
    this.data.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
    });
  },
  translate: function () {
    //动画 负数向左移 
    this.data.animation.translateX(-290).step()
    this.setData({
      ani: this.data.animation.export(),
      //  alpha:1,
      //  ishidden:false,
       isRuleTrue:true

    })
  },

  success: function () {
    this.data.animation.translateX(0).step()
    this.setData({ 
      ani: this.data.animation.export(),
      // alpha:0,
      // ishidden:true,
      isRuleTrue: false
    })
  },
  hiddenFilter:function(){
    this.data.animation.translateX(0).step()
    this.setData({
      ani: this.data.animation.export(),
      isRuleTrue: false
    })
  },
  tryDriver: function () {
    this.setData({
      background: "#89dcf8"
    })
  }
})