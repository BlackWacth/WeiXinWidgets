Page({

    data: {
        src: ""
    },

	bindButtonTap: function (event) {
        var that = this;
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: ['front', 'back'],
            success: function (res) {
                that.setData({
                    src: res.tempFilePath
                })
            }
        })
	},

	videoErrorCallback: function (event) {
        console.log('视频错误信息:');
        console.log(event.detail.errMsg);
	}
});
