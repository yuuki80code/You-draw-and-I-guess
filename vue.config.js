
const path = require('path')
const fs = require('fs')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
	lintOnSave: false,
	chainWebpack: config => {
	    config.resolve.alias
	      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
	 },
}
