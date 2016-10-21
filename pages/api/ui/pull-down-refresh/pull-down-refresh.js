Page({

    onPullDownRefresh: function () {
        console.log("refresh : " , new Date());
        wx.showNavigationBarLoading();
    },

    stopPullDownRefresh: function (event) {
        console.log("stopPullDownRefresh");
        wx.stopPullDownRefresh({

           complete: function (res) {
               wx.hideNavigationBarLoading();
               console.log("stop : " , res, new Date());
           }
        });
    }
});