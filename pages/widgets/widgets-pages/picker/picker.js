Page({
    data: {
        array:["中国","美国","巴西","日本"],
        index:0,
        date:"2016-10-19",
        time:"15:22"
    },

    bindDateChange: function (event) {
        this.setData({
            date: event.detail.value
        })
	},

	bindTimeChange: function (event) {
        this.setData({
            time: event.detail.value
        })
	},

	bindAddressChange: function (event) {
        console.log('picker发送选择改变，携带值为', event.detail.value);
        this.setData({
            index: event.detail.value
        })
	}
});
