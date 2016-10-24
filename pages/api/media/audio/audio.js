var util = require('../../../../utils/util.js');
var dataUrl = 'http://ws.stream.qqmusic.qq.com/C100001wmp4t06stlC.m4a?fromtag=38';
Page({
    data: {
        playing: false,
        playTime: 0,
        formatedPlayTime: '00:00:00'
    },

    onLoad: function () {
        var that = this;

        wx.onBackgroundAudioStop(function () {
            console.log("stop ", that.data.__webviewId__);
            that.setData({
                playing: false,
                playTime: 0,
                formatedPlayTime: '00:00:00'
            })
        });

        wx.onBackgroundAudioPlay(function () {
            console.log("play ", that.data.__webviewId__);
            if (that.data.playing === false) {
                that.setData({
                    playing: true
                });
            }
            if (that.updateInterval >= 0) {
                return;
            }
            that._enableInterval();
        });

        wx.onBackgroundAudioPause(function () {
            console.log("pause", that.data.__webviewId__);
            if (that.data.playing == true) {
                that.setData({
                    playing: false
                });
            }
            if (that.updateInterval >= 0) {
                clearInterval(that.updateInterval);
            }
        });

        wx.getBackgroundAudioPlayerState({
            success: function (res) {
                console.log("初始化播放器: ", res);
                console.log("webview: ", that.data.__webviewId__);

                var _isPlaying, _playTime;
                res.status === 1 ? _isPlaying = true : _isPlaying = false;
                res.currentPosition / res.duration > 0.95 ? _playTime = 0 : _playTime = res.currentPosition;

                that.setData({
                    playing: _isPlaying,
                    playTime: _playTime,
                    formatedPlayTime: util.formatTime(_playTime)
                });
                if (_isPlaying) {
                    that._enableInterval();
                }
            }
        });
    },

    play: function () {
        var that = this
        if (this.updateInterval >= 0)
            clearInterval(this.updateInterval)
        wx.playBackgroundAudio({
            dataUrl: dataUrl,
            title: 'Lost Stars',
            coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000000Jhxf24CFL06.jpg?max_age=2592000',
            complete: function () {
                that.setData({
                    playing: true
                })
                that._enableInterval()
            }
        })
    },

    resume: function () {
        var that = this
        if (this.updateInterval != '')
            clearInterval(this.updateInterval)
        wx.playBackgroundAudio({
            dataUrl: dataUrl,
            title: 'Lost Stars',
            coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000000Jhxf24CFL06.jpg?max_age=2592000',
            complete: function () {
                that.setData({
                    playing: true
                })
                wx.seekBackgroundAudio({
                    position: that.data.playTime,
                    complete: function () {
                        console.log("resume ok")
                    }
                })
            }
        })
    },

    seek: function (e) {
        var that = this
        clearInterval(this.updateInterval)
        // 此时正在播放
        if (this.data.playing === true)
            wx.seekBackgroundAudio({
                position: e.detail.value,
                complete: function () {
                    that._enableInterval()
                }
            })
        // 此时是暂停状态
        else
            wx.playBackgroundAudio({
                dataUrl: dataUrl,
                title: 'Lost Stars',
                coverImgUrl: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000000Jhxf24CFL06.jpg?max_age=2592000',
                complete: function () {
                    that.setData({
                        playing: true
                    })
                    wx.seekBackgroundAudio({
                        position: e.detail.value,
                        complete: function () {
                            console.log("seek and play ok")
                            that._enableInterval()
                        }
                    })
                }
            })
    },
    pause: function () {
        var that = this
        wx.pauseBackgroundAudio({
            success: function () {
                // 清除定时器
                that.setData({
                    playing: false
                })
                clearInterval(that.updateInterval)
            }
        })
    },

    stop: function () {
        var that = this
        wx.stopBackgroundAudio({
            success: function (res) {
                // 清除定时器
                clearInterval(that.updateInterval)
                // 设置初始数据
                that.setData({
                    playing: false,
                    playTime: 0,
                    formatedPlayTime: util.formatTime(0)
                })
            }
        })
    },

    _enableInterval: function () {
        var that = this
        update()
        this.updateInterval = setInterval(update, 500)
        function update() {
            wx.getBackgroundAudioPlayerState({
                success: function (res) {
                    that.setData({
                        // 正在播放
                        playing: true,
                        playTime: res.currentPosition,
                        formatedPlayTime: util.formatTime(res.currentPosition + 1)
                    })
                }
            })
        }
    },

    onUnload: function () {
        clearInterval(this.updateInterval)
    }
});