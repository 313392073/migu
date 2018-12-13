//app.js
const common = require('./utils/common.js')
const url = 'https://xcx.dtinone.com';
App({
  onLaunch: function () {
    
  },
  getLogin:function(){
    let that = this;
    let code = null;
    return new Promise(function(resolve,reject) {
      return common.login().then((code) => {
        let msg = {
          code:code.code
        };
        return common.reqUrl(that.globalData.config['reqlogin'], 'POST', msg,function(res){
          console.log(res)
          if (res.statusCode == 200){
            wx.setStorageSync('userIdInfo', res.data.info);
            wx.setStorageSync('id', res.data.info.id);
            that.globalData.userIdInfo = res.data.info;
            resolve(res)
          }else{
            reject(res)
          }
        },function(err){
          reject(err)
        })
      }).catch((err) => {
        reject(err)
      })
    })
  },
  globalData: {
    userIdInfo: null,
    userInfo:null,
    config:{
      reqlogin: url + '/apps/index/login.html',
      reqgetCode: url +'/apps/index/send_code.html',
      reqhomesubmit: url +'/apps/index/sign_up_home.html',
      reqhomedata: url +'/apps/index/index.html',
      reqReg: url+'/apps/index/perfect_info.html',
      reqActlis: url +'/apps/index/activity.html',
      reqActget: url +'/apps/index/form_activity.html',
      reqFreetest: url +'/apps/index/test.html',
      reqFreeres: url +'/apps/index/form_test.html',
      reqFreelis: url +'//apps/index/audition.html',
      reqFreedata: url +'/apps/index/form_audition.html',
      reqFreeDetail: url +'/apps/index/activity_info.html',
      reqCoptra: url +'/apps/index/form_training.html',
      reqOrder: url +'/apps/index/order_list.html',
      reqCourse_info: url +'/apps/index/course_info.html',
      reqCourseFree: url +'/apps/index/tuition.html',
      reqCoupons: url + '/apps/wechat/index.html',
      reqCardBack: url + '/apps/wechat/voucher.html',
      reqCardList: url +'/apps/index/coupons.html',
      reqGetcop: url + '/apps/wechat/index.html',
      reqtraining: url + '/apps/index/training.html',
      reqteacher: url +'/apps/index/teacher.html',
      copUrl: url + '/upload/20181125/5d6d4fca8b424473f2795cb2c6fd9e06.png',
      copHomebg1: url + '/upload/20181125/3d2c86e602d4c91d0f34f64978f77ca5.png',
      copHomebg2: url +'/upload/20181125/6d98bfe6158b72ad6dc5bc07d48e2f7a.png',
    }
  }
})