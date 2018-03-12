//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad:function(){
     this.calender = this.selectComponent("#calender")
  },
  add:function(e){
      this.calender.add()
  },
  reduce:function(e){
      this.calender.reduce()
  }
})
