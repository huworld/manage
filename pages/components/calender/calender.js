// pages/components/calender.js
Component({
   data:{
      weekArr:["日","一","二","三","四","五","六"],
      yearMonth:[],
      rowNum:"",
      dateArr:[],
      currentMonth:"",
      year:"",
      weekNum:""
   },
   created:function(){},
   attached:function(){
      let T = new Date()
      this.setData({
         currentMonth: T.getMonth() + 1,
         year: T.getFullYear()
      })
      //判断闰年
      let yeartype = (this.data.year % 4 == 0) && (this.data.year % 100 != 0 || this.data.year % 400 == 0)
      if ( yeartype ){
         this.setData({
            yearMonth: [31, 29 , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
         })
      }else{
         this.setData({
            yearMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
         })
      }
      let currentMonthDay = this.data.year + "-" + this.data.currentMonth +"-01"
      let weekStr = ""
      this.setData({
         weekNum: new Date(currentMonthDay).getDay(),
         rowNum: Math.ceil((this.data.yearMonth[this.data.currentMonth] + new Date(currentMonthDay).getDay())/7)
      })
      for( let i=0 ; i<this.data.rowNum ; i++ ){
         for( let j = 0 ; j<7 ; j++ ){
            this.data.dateArr.push(i*7+j)
         }
      }
      this.setData({
         dateArr:this.data.dateArr
      })
   },
   methods:{
      add:function(){
         this.setData({
            dateArr: []
         })
         if (this.data.currentMonth==12 ){
            this.setData({
               currentMonth: 1,
               year:this.data.year+1
            })
         }else{
            this.setData({
               currentMonth: this.data.currentMonth + 1
            })
         }
         let currentMonthDay = this.data.year + "-" + this.data.currentMonth + "-01"
         let weekStr = ""
         this.setData({
            weekNum: new Date(currentMonthDay).getDay(),
            rowNum: Math.ceil((this.data.yearMonth[this.data.currentMonth-1] + new Date(currentMonthDay).getDay()) / 7)
         })
         for (let i = 0; i < this.data.rowNum; i++) {
            for (let j = 0; j < 7; j++) {
               this.data.dateArr.push(i * 7 + j)
            }
         }
         this.setData({
            dateArr: this.data.dateArr
         })
      },
      reduce:function(){
         this.setData({
            dateArr:[]
         })
         if (this.data.currentMonth == 1) {
            this.setData({
               currentMonth: 12,
               year: this.data.year - 1
            })
         } else {
            this.setData({
               currentMonth: this.data.currentMonth - 1
            })
         }
         let currentMonthDay = this.data.year + "-" + this.data.currentMonth + "-01"
         let weekStr = ""
         this.setData({
            weekNum: new Date(currentMonthDay).getDay(),
            rowNum: Math.ceil((this.data.yearMonth[this.data.currentMonth-1] + new Date(currentMonthDay).getDay()) / 7)
         })
         for (let i = 0; i < this.data.rowNum; i++) {
            for (let j = 0; j < 7; j++) {
               this.data.dateArr.push(i * 7 + j)
            }
         }
         this.setData({
            dateArr: this.data.dateArr
         })
      },
      _add:function(){
         this.triggerEvent( "add" )
      },
      _reduce:function(){
         this.triggerEvent( "reduce" )
      }
   }
})