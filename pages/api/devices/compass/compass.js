Page({
    data: {
        direction: 0
    },

    onReady: function () {
        var that = this;
        wx.onCompassChange(function (res) {
            console.log(res);
            this.setData({
                direction: parseInt(res.direction)
            })
        })
    }
});