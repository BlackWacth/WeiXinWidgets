Page({
    showNavigationBarLoading: function (event) {
        console.log("show ->" + event);
        wx.showNavigationBarLoading();
    },

    hideNavigationBarLoading: function (event) {
        console.log("hide -> " + event);
        wx.hideNavigationBarLoading()
    }
});