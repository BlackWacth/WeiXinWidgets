Page({
    data: {
        background: ['green', 'red', 'yellow', 'blue'],
        indicatorDots: true,
        vertical: false,
        autopplay: false,
        interval: 3000,
        duration: 1000
    },

    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },

    changeVertical: function (e) {
        this.setData({
            vertical: !this.data.vertical
        })
    },

    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autopplay
        })
    },

    intervalChage: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },

    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    },

    swipeChange: function (e) {
        console.log("page change")
    }

})