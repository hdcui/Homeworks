//使用gulp工具处理前端文件
var gulp = require('gulp');

//引入gulp插件
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

//设定gulp default task
gulp.task('default', function() {
    var maintask =
        gulp.src('src/less/style.less')
        .pipe(less()) //解析 .less 文件
        .pipe(minifycss()) //压缩解析后的 .css文件
        .pipe(rename({
            suffix: '.min'
        })) //为css文件添加 .min的后缀名
        .pipe(gulp.dest(('src/css'))) //解析完成后的目标文件夹

    console.log('Task  success~');

    return maintask;
})
