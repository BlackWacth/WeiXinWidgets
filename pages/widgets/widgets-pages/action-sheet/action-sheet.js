var items = ['北京', '深圳', '三亚', '成都']
var pageObject = {
    data: {
        actionSheetHidden: true,
        actionSheetItems: items
    },

    actionSheetTap: function (event) {
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
    },

    actionSheetChange: function (event) {
        this.setData({
            actionSheetHidden: !this.data.actionSheetHidden
        })
    }
};

for(var i = 0; i < items.length; ++i) {
    (function (itemName) {
        pageObject['bind'+itemName] = function (event) {
            console.log(itemName, event)
        }
    })(items[i]);
}
Page(pageObject);
