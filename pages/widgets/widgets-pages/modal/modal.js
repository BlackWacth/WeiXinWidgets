Page({

    data: {
        modalHidden: true,
        modalHidden2: true
    },

	modalCancel2: function (event) {
        console.log(event);
        this.setData({
            modalHidden2: true
        })
	},

	modalConfirm2: function (event) {
        console.log(event);
        this.setData({
            modalHidden2: true
        })
	},

	modalCancel: function (event) {
        console.log(event);
        this.setData({
            modalHidden: true
        })
	},

	modalConfirm: function (event) {
        console.log(event);
        this.setData({
            modalHidden: true
        })
	},

	modalTap2: function (event) {
        this.setData({
            modalHidden2: false
        })
	},

	modalTap: function (event) {
        this.setData({
            modalHidden: false
        })
	}
});
