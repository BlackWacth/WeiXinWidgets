Page({
    onLoad: function (event) {
        console.log(event);
        this.setData({
            title: event.title
        })
    }
});
