function showMsg(title) {
  wx.showToast({
    title: title,
    icon: 'none',
    duration: 1500
  })
}
function reqUrl(url, method,data,doSuccess,doFail){
  wx.request({
    url: url, //仅为示例，并非真实的接口地址
    method:method,
    data: data,
    header: {
      'content-type': 'application/json,charset=UTF-8' // 默认值
    },
    success: function (res) {
      doSuccess(res)
    },
    fail:function(err){
      doFail(err)
    }
  })
}

function login(){
  return new Promise(function(resolve,reject){
    wx.login({
      success: res => {
        if(res.code) {
          resolve(res)
        }else{
          reject(res)
        }
      },
      fail:function(err){
        reject(err)
      }
    })
  })
}

function showError(){
  wx.showToast({
    title: '网路开小差，请稍后再试',
    icon: 'none',
  })
}


module.exports = {
  showMsg: showMsg,
  reqUrl: reqUrl,
  login: login,
  showError: showError
}