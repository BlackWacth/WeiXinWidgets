var order = ['green', 'red', 'yellow', 'blue']
Page({
    data: {
        toView: "green"
    },
    upper:function (e) {
        console.log("upper" + e)
    },
    lower: function (e) {
        console.log("lower" + e)
    },
    scroll: function (e) {
        console.log("scroll" + e)
    },

    scrollToTop: function (e) {
        this.setData({
            scrollTop: 0
        })
    },
    tap: function (e) {
        for (var i = 0; i < order.length; ++i) {
            if(order[i] === this.data.toView) {
                var index = (i + 1) % order.length;
                this.setData({
                    toView: order[index],
                    scrollTop: (index) * 200
                })
                break
            }
        }
    },
    tapMove: function (e) {
        this.setData({
            scrollTop: this.data.scrollTop + 10
        })
    }
})