const fs = require('fs')
const exec = require('child_process').exec
const path = require('path')
/**
 * 
 * @param  rootPath 执行命令时的路径
 * @param  filename 变动的less文件名
 */
function genWxssFile(rootPath, filename, suffix) {
	let filePathArr = `${rootPath + '\\' + filename}`.split('.')
	filePathArr.pop()
	let filenameWithPath = filePathArr.join('.')
	exec(`lessc -x ${filenameWithPath}.less > ${filenameWithPath}.${suffix}`)
}
/**
 * 递归监听文件夹下less文件的变化（包括新建less文件）
 * @param rootPath 执行命令时的路径
 * @param suffix 需要编译生成的文件后缀名（wxss/css）
 */
function fileWatcher(rootPath, suffix) {
	fs.watch(rootPath,
		{
			encoding: 'utf-8',
			recursive: true,//是否监听子文件夹下的文件
			persistent: true//是否持续监听
		},
		(eventType, filename) => {
			if (eventType === "change" && path.extname(filename) === ".less") {
				genWxssFile(rootPath, filename, suffix)
			}
		});
}
module.exports = fileWatcher 