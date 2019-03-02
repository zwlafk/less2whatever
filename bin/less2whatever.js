#!/usr/bin/env node
var fs = require("fs"),
    path = process.cwd(),
    fileWatcher = require("../index.js");
/**
 * 
 * @param {Array} suffix  
 */
var run = function (suffix) {
    suffix = suffix.length ? suffix : 'css'
    fs.readdir(path, function (err, files) {
        console.log(path)
        if (err) {
            return console.log(err);
        }
        fileWatcher(path, suffix)
    });
};
//获取除第一个命令以后的参数，使用空格拆分
run(process.argv.slice(2)); 