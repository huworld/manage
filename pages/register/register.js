// pages/register/register.js
const app = getApp()
const request = require('./../../utils/util')
Page({
   data:{
      countDown:5,
      countType:1,
      loginType:true
   },
   registerTo:function(){
      wx.switchTab({
         url: './../checkOrder/checkIndex/checkIndex',
      })
   },
   onLoad:function(){},
   //点击获取验证码
   timerTo:function(){
      if(this.data.countType==1){
         this.countDown()
      }
   },
   //短信登录倒计时
   countDown:function(){
      this.setData({
         countType:0
      })
      const that = this
      let timer = setInterval(() => {
         that.setData({
            countDown:that.data.countDown - 1
         })
         if( that.data.countDown==0 ){
            clearInterval(timer)
            that.setData({
               countType:1,
               countDown:5
            })
         }
      }, 1000)
   }
})