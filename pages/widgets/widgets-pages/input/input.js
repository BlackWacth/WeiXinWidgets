Page({
	data: {
        focus: false,
        inputValue: ''
    },

    bindHideKeyboard: function (event) {
        if(event.detail.value === '123') {
            wx.hideKeyboard();
        }
	},

	bindReplaceInput: function (event) {
        var value = event.detail.value;
        var pos = event.detail.cursor;
        if(pos != -1) {
            var left = event.detail.value.slice(0, pos);
            pos = left.replace(/11/g, '2').length;
        }
        return {
            value: value.replace(/11/g, '2'),
            cursor: pos
        }
	},

	bindKeyInput: function (event) {
        this.setData({
            inputValue: event.detail.value
        })
	},

	bindButtonTap: function (event) {
        this.setData({
            focus: true
        })
	}

});
