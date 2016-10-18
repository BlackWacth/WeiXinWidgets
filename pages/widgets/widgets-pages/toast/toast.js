var toastNum = 3;
var pageData = {};
pageData.data = {};

for(var i = 1; i <= toastNum; i++) {
    pageData.data['toast_hidden' + i] = true;
    (function (index) {
        pageData['toast'+i] = function (event) {
            var obj = {};
            obj['toast_hidden' + index] = false;
            this.setData(obj);
        };

        pageData['toast_change'+i] = function (event) {
            console.log("toast消失");
            var obj = {};
            obj['toast_hidden' + index] = true;
            this.setData(obj);
        }
    })(i);
}
Page(pageData);