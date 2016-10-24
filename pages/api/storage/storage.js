Page({

    data: {
        toast: {
            hidden: true
        }
    },

	toastChange: function (event) {
        this.setData({
            toast:{
                hidden: true
            }
        })
	},

	submitForm: function (event) {
        console.log(event);
        var type = event.detail.target.id;
        var key = event.detail.value.key;
        var data = event.detail.value.data;

        if(key.length === 0 && type !== 'clear') {
            this.setData({
                key: key,
                data: data,
                toast: {
                    hidden: false,
                    content: 'key不能为空'
                }
            })
        } else if(key.length > 0 && type === 'set' && data.length > 0) {
            wx.setStorageSync(key, data);
            this.setData({
                key: key,
                data: data,
                toast: {
                    hidden: false,
                    content: '数据存储成功'
                }
            })
        } else if(key.length > 0 && type === 'get') {
            this.setData({
                key: key,
                data: wx.getStorageSync(key),
                toast: {
                    hidden: false,
                    content: '数据读取成功'
                }
            })
        } else if(type === 'clear') {
            wx.clearStorageSync();
            this.setData({
                key: '',
                data: '',
                toast: {
                    hidden: false,
                    content: '数据清除成功'
                }
            })
        }
	}
});