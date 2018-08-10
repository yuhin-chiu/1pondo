// pages/list/list.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [

    ],
    label: 'null'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.setData({
      label: '#' + options.label
    })
    var count = app.globalData.imageCount;
    var dir = 'list1/'
    var imgs = [];
    for(var i= 0; i < count / 2; i++) {
      var obj = {};
      obj.left = app.globalData.remoteUrl + dir + (i * 2 + 1) + '.png';
      if(i * 2 + 2 <= count) {
        obj.right = app.globalData.remoteUrl + dir +  (i * 2 + 2) + '.png'; 
      }
      imgs.push(obj);
    }
    this.setData({
      images: imgs
    })
  },
  goToDetail: function(e) {
    var src = e.currentTarget.dataset.src;
    wx.navigateTo({
      url: '../detail/detail?src=' + src
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
  
  }
})