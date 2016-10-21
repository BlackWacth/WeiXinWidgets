Page({
    setNavigationBarTitle: function (event) {
       console.log(event);
       var title = event.detail.value.title;
       wx.setNavigationBarTitle({
           title: title
       })
   }
});