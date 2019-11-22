// pages/sift/sift.js
var yongtuid= [{ 'title': '全部', 'id': '1', 'isSelect': false, 'section': '1' }, { 'title': '经济实惠型', 'id': '2', 'isSelect': false, 'section': '1' }, { 'title': '家用学习型', 'id': '3', 'isSelect': false, 'section': '1' }, { 'title': '豪华发烧型', 'id': '4', 'isSelect': false, 'section': '1' }, { 'title': '疯狂游戏型', 'id': '5', 'isSelect': false, 'section': '1' }, { 'title': '商务办公型', 'id': '6', 'isSelect': false, 'section': '1' }, { 'title': '经济实惠型', 'id': '7', 'isSelect': false, 'section': '1' }, { 'title': '商务办公型', 'id': '8', 'isSelect': false, 'section': '1' }];

var priceId= [{ 'title': '全部', 'id': '9', 'isSelect': false, 'section': '2' }, { 'title': '经济实惠型', 'id': '10', 'isSelect': false, 'section': '2' }, { 'title': '家用学习型', 'id': '11', 'isSelect': false, 'section': '2' }, { 'title': '豪华发烧型', 'id': '12', 'isSelect': false, 'section': '2' }, { 'title': '疯狂游戏型', 'id': '13', 'isSelect': false, 'section': '2' }, { 'title': '商务办公型', 'id': '14', 'isSelect': false, 'section': '2' }, { 'title': '经济实惠型', 'id': '15', 'isSelect': false, 'section': '2' }, { 'title': '商务办公型', 'id': '16', 'isSelect': false, 'section': '2' }];
var sumSelectArray = [];
Page({
  data:{
    isRuleTrue:false,
    animation:null,
    isSelect:false,
    filterData: [{ 'title': '用途', 'array':  yongtuid}, { 'title': '价格', 'array': priceId }],
    syongtuid:[],
    spriceId:[]
  },
  onLoad: function () {
    this.data.animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'linear',
    });
  },
  selectItemClick: function(e){
    console.log(e);
    var oldSelect;
    var section = e.currentTarget.dataset.name.section;
    var currentArray;

    if(section == 1)
    {
       //用途
      currentArray = yongtuid;
    }else{
      //价格
      currentArray = priceId;
    }
   console.log('当前选中的数组item',currentArray);
    for (var i = 0; i < currentArray.length; i++) {
      if (currentArray[i].id == e.target.id) {
        //表示当前选中的item
        currentArray[i].isSelect = !currentArray[i].isSelect;
      }
    }

    if(section == 1){
      this.setData({
        // 给对象属性赋值的方法
        'filterData[0].array':currentArray,
        
      });
    }else{
      this.setData({
        'filterData[1].array':currentArray
      });
    }
  },
  translate: function () {
    //动画 负数向左移 
    this.data.animation.translateX(-290).step()
    this.setData({
      ani: this.data.animation.export(),
       isRuleTrue:true

    })
  },
  //完成
  success: function () {
    var ytselectArray;
    var priceselectArray;
    
    for(var i=0; i< this.data.filterData.length;i++)
    {
      for(var j=0;j<this.data.filterData[i].array.length;j++){
        if (this.data.filterData[i].array[j].isSelect){
          sumSelectArray.push(this.data.filterData[i].array[j])
        }
      }
    }
    console.log('选中的用途',sumSelectArray);
    this.data.animation.translateX(0).step()
    this.setData({ 
      ani: this.data.animation.export(),
      isRuleTrue: false,
      syongtuid:sumSelectArray
    })
  },
  //重置
  result: function() {
    // 清空数组
   
      for (var i = 0; i < sumSelectArray.length; i++) {
        if(sumSelectArray[i].section == 1){
          for (var j = 0; j < yongtuid.length; j++) {
            if (sumSelectArray[i].id == yongtuid[j].id) {
              yongtuid[j].isSelect = false;
            }
          }
        }else{
          for (var j = 0; j < priceId.length; j++) {
            if (sumSelectArray[i].id == priceId[j].id) {
              priceId[j].isSelect = false;
            }
          }
        }
     }
     //更新数据源
    this.setData({
      // 给对象属性赋值的方法
      'filterData[0].array': yongtuid,
      'filterData[1].array':priceId
    });
    sumSelectArray=[];
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