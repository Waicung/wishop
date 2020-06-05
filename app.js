//app.js
import {
  promisifyAll
} from "miniprogram-api-promise";
const {
  getGetResponse
} = require("/apis/index");
const ENV = require("env");
const wxp = {};
promisifyAll(wx, wxp);

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    // 登录
    wxp
      .login()
      .then((res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          getGetResponse(ENV.REMOTE_SERVER, "login", {
              code: res.code,
            })
            .then((res) => {
              if (res.statusCode === 200) {
                console.log("登陆成功");
                //TODO 登录态管理
                //console.log(res.data.sessionId); // 服务器回包内容
              }
            })
            .catch((err) => {
              console.log("获取用户登录态失败！" + err.errMsg);
            });
        }
      })
      .catch((err) => {
        console.log("用户拒绝登录！" + err.errMsg);
      });

    // 获取用户信息
    wxp.getSetting().then((res) => {
      if (res.authSetting["scope.userInfo"]) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        wxp.getUserInfo().then((res) => {
          // 可以将 res 发送给后台解码出 unionId
          this.globalData.userInfo = res.userInfo;

          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          if (this.userInfoReadyCallback) {
            this.userInfoReadyCallback(res);
          }
        });
      }
    });
  },
  // 全局变量
  globalData: {
    userInfo: null,

  },
});