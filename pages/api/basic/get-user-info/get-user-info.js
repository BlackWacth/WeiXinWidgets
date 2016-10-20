var app = getApp();
Page({
   data: {
       hasUserInfo: false
   },

    onLoad: function () {
        var that = this;
        console.log("hasLogin = " + app.globalData.hasLogin);
        if(app.globalData.hasLogin === true) {
            wx.getUserInfo({
                success: function (res) {
                    that.setData({
                        hasUserInfo: true,
                        userInfo: res.userInfo
                    });
                    that.update();
                }
            })
        }
    },

    getUserInfo: function () {
        var that = this;
        if(app.globalData.hasLogin === false) {
            wx.login({
                success: _getUserInfo
            })
        }else {
            _getUserInfo
        }

        function _getUserInfo() {
            wx.getUserInfo({
                success: function (res) {
                    that.setData({
                        hasUserInfo: true,
                        userInfo: res.userInfo
                    });
                    that.update();
                }
            })
        }
    },

    clear: function () {
        this.setData({
            hasUserInfo: false,
            userInfo:{}
        })
    }
});