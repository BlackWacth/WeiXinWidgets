var types = ['default', 'primary', 'warn'];
var pageObj = {
    data: {
        defaultSize: 'default',
        primarySize: 'default',
        warnSize: 'default',
        disabled: false,
        plain: false,
        loading: false
    },

    setLoading: function (event) {
        this.setData({
            loading: !this.data.loading
        })
    },

    setPlain: function (event) {
        this.setData({
            plain: !this.data.plain
        })
    },

    setDisabled: function (event) {
        this.setData({
            disabled: !this.data.disabled
        })
    }
};

for(var i = 0; i < types.length; ++i) {
    (function (type) {
        pageObj[type] = function (e) {
            var key = type + 'Size';
            var changedData = {};
            changedData[key] = this.data[key] === 'default' ? 'mini' : 'defalult';
            this.setData(changedData);
        }
    })(types[i]);
}
Page(pageObj);
