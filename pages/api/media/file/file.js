Page({

    data: {
        tempFilePath: '',
        savedFilePath: wx.getStorageSync('saveFilePaht') || '',
        dialog: {
            hidden: true
        }
    },

	confirm: function (event) {
        this.setData({
            'dialog.hidden': true
        })
	},

	clear: function (event) {
        wx.setStorageSync('svaedFilePath', '');
        this.setData({
            tempFilePath: '',
            savedFilePath: ''
        })
	},

	saveFile: function (event) {
        if(this.data.tempFilePath.length > 0) {
            var that = this;

            wx.saveFile({
               tempFilePath: this.data.tempFilePath,
                success: function (res) {
                    console.log("save success: ", res);
                    that.setData({
                        savedFilePath: res.savedFilePath
                    })
                    wx.setStorageSync('savedFilePath', res.savedFilePath);
                    that.setData({
                        dialog: {
                            title: '保存成功',
                            content: "下次进入应用时， 此文件仍可用",
                            hidden: false
                        }
                    })
                },
                fail: function (res) {
                    console.log("save fail: ", res);
                    that.setData({
                        dialog: {
                            title: '保存失败',
                            content: "程序未知错误",
                            hidden: false
                        }
                    })
                }
            });
        }

	},

	chooseImage: function (event) {
        var that = this;
        wx.chooseImage({
            count: 1,
            success: function (res) {
                console.log("chooseImage : ", res);
                that.setData({
                    tempFilePath: res.tempFilePaths[0]
                })
            }
        })
	}
});