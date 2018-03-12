//request请求函数
function request(url, json, callback) {
   wx.request({
      url: "https://www.fatime.cn" + url,
      data: json,
      method: 'POST',
      header: {
         "Content-Type": "application/x-www-form-urlencoded" // 默认值
      },
      success: function (res) {
         callback(res)
      }
   })
}

//函数暴露
module.exports = {
   request: request
}