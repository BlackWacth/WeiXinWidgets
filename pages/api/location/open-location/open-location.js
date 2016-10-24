Page({
	openLocation: function (event) {
        console.log(event);
        var value = event.detail.value;
        wx.openLocation({
            longitude: Number(value.longitude),
            latitude: Number(value.latitude),
            name: value.name,
            address: value.address
        })
	}
});