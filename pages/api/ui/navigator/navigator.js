Page({
    navigateTo: function (event) {
        wx.navigateTo({
           url: '../navigation-bar-title/navigation-bar-title'
        });
    },

    navigateBack: function (event) {
        wx.navigateBack();
    },

    redirectTo: function (event) {
        wx.redirectTo({
            url: '../navigation-bar-title/navigation-bar-title'
        });
    }
});