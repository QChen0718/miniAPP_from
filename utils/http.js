//网络请求方法
function httprequest(model) {
  wx.request({
    url: model.url,
    data: model.param,
    header: {
      "Content-Type": "application\/json",
      "Accept-Version": model.apiversion
    },
    method: model.method,
    success: function (res) {
      model.success(res.data)
    },
    fail: function (res) {
      wx.showToast({
        title: res,
      })
      model.fail(res.data)
    }
  })
}
module.exports = {
  httprequest: httprequest
}