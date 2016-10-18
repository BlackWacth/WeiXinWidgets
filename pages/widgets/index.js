/**
 * Created by hzw on 2016/10/14.
 */
var pageData = {},
    type = [
        'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
    ];

pageData.widgetsToggle = function (e) {
    var id = e.currentTarget.id;
    var data = {};
    console.log("id = " + id);
    for (var i = 0, len = type.length; i < len; ++i) {
        data[type[i] + 'Show'] = false;
    }
    data[id + 'Show'] = !this.data[id + 'Show'];
    this.setData(data);
};

Page(pageData);