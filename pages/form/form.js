// pages/form/form.js
const app = getApp();
let userData;
let userInfo;
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success(res) {
        userData = res;
        userInfo = res.userInfo;
        console.log(userData, userInfo)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  formSubmit: function(e) {
    const {
      phone, username, salesId, height, weight, age
    } = e.detail.value;
    // console.log(app.globalData.userInfo)
    // console.log(e.detail.value)
    if (!phone || !username || !salesId) {
      wx.showToast({
        title: '请检查必填项！',
        icon: 'none',
      });
      return;
    }
    wx.request({
      // url: 'http://127.0.0.1:7991/member',
      url: 'http://192.168.199.187:7991/member',
      method: 'POST',
      data: {
        signature: userData.signature,
        phone: phone,
        username: username,
        salesId: salesId,
        sex: userInfo.gender,
        height: height,
        weight: weight,
        age: age,
      },
      success: (res) => {
        console.log(res);
        wx.showToast({
          title: '提交成功！',
          success: () => {
            wx.navigateBack();
          }
        });
      },
      fail: (res) => {
        console.log(res);
        wx.showToast({
          title: '提交失败！',
          icon: 'none',
          success: (res) => {
            console.log(res);
          }
        });
      },
    })
  },

  formReset: function() {}
})