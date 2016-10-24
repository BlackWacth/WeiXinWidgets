var formatLocation = require('./format-location.js');
Page({

    data: {
        hasLocation: false
    },

	clear: function (event) {
        this.setData({
            hasLocation: false
        })
	},

	getLocation: function (event) {
        wx.showNavigationBarLoading();
        var that = this;
        wx.getLocation({
            success: function (res) {
                wx.hideNavigationBarLoading();
                console.log(res);
                that.setData({
                    hasLocation: true,
                    location: formatLocation(res.longitude, res.latitude)
                });
            }
        })
	}
});