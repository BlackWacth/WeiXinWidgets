Page({

    data: {
        pickerHidden: true,
        chosen: ''
    },

    formReset: function (e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },

    formSubmit: function (e) {
        console.log('form发生了reset事件，携带数据为：', e.detail.value)
    }

});