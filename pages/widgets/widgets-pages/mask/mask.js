Page({
    data: {
        hidden1: true,
        hidden2: true,
        hidden3: true,
        hidden4: true
    },

    tap4: function (event) {
        this.setData({
            hidden4: false

        });
        console.log("hidden4 = " + this.data.hidden4);
    },

    mask4: function (event) {
        this.setData({
            hidden4: true

        });
        console.log("hidden4 = " + this.data.hidden4);
    },

    tap3: function (event) {
        this.setData({
            hidden3: false

        });
        console.log("hidden3 = " + this.data.hidden3);
    },

    mask3: function (event) {
        this.setData({
            hidden3: true

        });
        console.log("hidden3 = " + this.data.hidden3);
    },

    tap2: function (event) {
        this.setData({
            hidden2: false

        });
        console.log("hidden2 = " + this.data.hidden2);
    },

    mask2: function (event) {
        this.setData({
            hidden2: true

        });
        console.log("hidden2 = " + this.data.hidden2);
    },

    tap1: function (event) {
        this.setData({
            hidden1: false

        });
        console.log("hidden1 = " + this.data.hidden1);
    },

    mask1: function (event) {
        this.setData({
            hidden1: true
        })
        console.log("hidden1 = " + this.data.hidden1)
    }
})
