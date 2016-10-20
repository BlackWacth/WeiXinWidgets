var app = getApp();
Page({
    data: {

    },
    onLoad: function () {
       console.log("onLoad = " + app.globalData.hasLogin);
       this.setData({
           hasLogin: app.globalData.hasLogin
       })
   },

    login: function (event) {
        var that = this;
        wx.login({
            success: function (res) {
                app.globalData.hasLogin = true;
                that.setData({
                    hasLogin: true
                })
                that.update();
            }
        })
    }
});