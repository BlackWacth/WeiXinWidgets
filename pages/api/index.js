Page({
    data: {
        menuList: [
            {
                name: '基础能力',
                APIList: [{
                    zhName: '微信登录',
                    enName: 'login',
                    url: 'basic/login/login'
                }, {
                    zhName: '获取用户信息',
                    enName: 'getUserInfo',
                    url: 'basic/get-user-info/get-user-info'
                }, {
                    zhName: '发起支付',
                    enName: 'RequestPayment',
                    url: 'basic/request-payment/request-payment'
                }],
                opened: false
            },
            {
                name: '界面跳转、监听和加载',
                opened: false,
                APIList: [{
                    zhName: '设置界面标题',
                    enName: 'setNavigationBarTitle',
                    url: 'ui/navigation-bar-title/navigation-bar-title'
                }, {
                    zhName: '标题栏加载动画',
                    enName: 'navigationBarLoading',
                    url: 'ui/navigation-bar-loading/navigation-bar-loading'
                }, {
                    zhName: '页面跳转',
                    enName: 'navigateTo, navigateBack, redirectTo',
                    url: 'ui/navigator/navigator'
                }, {
                    zhName: '下拉刷新',
                    enName: 'pullDownRefresh',
                    url: 'ui/pull-down-refresh/pull-down-refresh'
                }, {
                    zhName: '创建动画',
                    enName: 'createAnimation',
                    url: 'ui/animation/animation'
                }, {
                    zhName: '创建绘画',
                    enName: 'createContext',
                    url: 'ui/canvas/canvas'
                }]
            },
            {
                name: '设备相关',
                opened: false,
                APIList: [{
                    zhName: '获取手机网络状态',
                    enName: 'getNetworkType',
                    url: 'devices/network-type/network-type'
                }, {
                    zhName: '获取手机系统信息',
                    enName: 'getSystemInfo',
                    url: 'devices/system-info/system-info'
                }, {
                    zhName: '监听重力感应数据',
                    enName: 'onAccelerometerChange',
                    url: 'devices/accelerometer/accelerometer'
                }, {
                    zhName: '监听罗盘数据',
                    enName: 'onCompassChange',
                    url: 'devices/compass/compass'
                }]
            },
            {
                name: '网络相关',
                opened: false,
                APIList: [{
                    zhName: '发起一个请求',
                    enName: 'request',
                    url: 'network/request/request'
                }, {
                    zhName: 'Web Socket',
                    enName: 'Web Socket',
                    url: 'network/web-socket/web-socket'
                }, {
                    zhName: '上传文件',
                    enName: 'Upload File',
                    url: 'network/upload-file/upload-file'
                }, {
                    zhName: '下载文件',
                    enName: 'Download File',
                    url: 'network/download-file/download-file'
                }]
            },
            {
                name: '多媒体',
                opened: false,
                APIList: [{
                    zhName: '图片',
                    enName: 'chooseImage/previewImage',
                    url: 'media/image/image'
                }, {
                    zhName: '录音',
                    enName: 'start/stopRecord, play/pause/stopVoice',
                    url: 'media/voice/voice'
                }, {
                    zhName: '背景音频',
                    enName: 'play/pause/stopAudio',
                    url: 'media/audio/audio'
                }, {
                    zhName: '文件',
                    enName: 'saveFile',
                    url: 'media/file/file'
                }]
            },
            {
                name: '数据',
                opened: false,
                url: 'storage/storage'
            },
            {
                name: '地理位置',
                opened: false,
                APIList: [{
                    zhName: '获取当前位置',
                    enName: 'getLocation',
                    url: 'location/get-location/get-location'
                }, {
                    zhName: '使用原生地图查看位置',
                    enName: 'openLocation',
                    url: 'location/open-location/open-location'
                }]
            }
        ]
    },
    tapMenuItem: function (e) {
        var menuItem = this.data.menuList[parseInt(e.currentTarget.id)];
        if (menuItem.url) {
            wx.navigateTo({ url: menuItem.url })
        } else {
            var changeData = {};
            var opened = menuItem.opened;

            changeData['menuList[' + e.currentTarget.id + '].opened'] = !opened;
            this.setData(changeData);
        }
    }
});
