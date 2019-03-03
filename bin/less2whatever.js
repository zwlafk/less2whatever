#!/usr/bin/env node
var fs = require("fs"),
    path = process.cwd(),
    fileWatcher = require("../index.js");
/**
 * 
 * @param  suffix 自定义生成的后缀名，从命令行的参数中获取
 */
var run = function (suffix="css") {
    fs.readdir(path, function (err, files) {
        console.log(path)
        if (err) {
            return console.log(err);
        }
        fileWatcher(path, suffix)
    });
};
//获取除第一个命令以后的第一个参数
run(process.argv.slice(2)[0]); 