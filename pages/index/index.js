//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  bindButtonTap: function(event) {
    var title = event.currentTarget.dataset.title;
    var label = event.currentTarget.dataset.label;
    wx.navigateTo({
      url: '../list/list?title=' + title + '&label=' + label
    })
  },
  test: function (event) {
    console.log();
  }
})
