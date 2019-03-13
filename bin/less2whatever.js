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
        console.log('\033[42;30m DONE \033[40;32m '+`less2whatever is watching your less file under ${path}`)
        if (err) {
            return console.log(err);
        }
        fileWatcher(path, suffix)
    });
};
//获取除第一个命令以后的第一个参数
run(process.argv.slice(2)[0]); 