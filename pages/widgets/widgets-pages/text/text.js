var initData = 'this is first line \n this is second line'

Page({

	data: {
		text: initData
	},

	extraLine: [],

	remove: function (event) {
		if(this.extraLine.length > 0) {
			this.extraLine.pop()
			this.setData({
				text: initData + '\n' + this.extraLine.join('\n')
			})
		}
	},

	add: function (event) {
		this.extraLine.push('other line')
		this.setData({
			text: initData + "\n" + this.extraLine.join('\n')
		})
	}
})