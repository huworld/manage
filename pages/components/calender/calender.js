// pages/components/calender.js
Component({
   data:{
      weekArr:["日","一","二","三","四","五","六"]
   },
   created:function(){
      console.log("A")
      let T = new Date()
      let year = T.getFullYear()
      //判断闰年
      let yeartype = (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)
      console.log(yeartype)
      //
   },
   attached:function(){
      console.log("a")
      console.log(yeartype)
   }
})