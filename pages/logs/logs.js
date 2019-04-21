//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  //sadddadadad
  onLoad: function () {
    util.initDataProxy.apply(this)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    console.log(this.logs)
  }
})