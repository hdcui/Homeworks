//使用gulp工具处理前端文件
var gulp = require('gulp');

//引入gulp插件
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//gulp解析less文件和压缩
gulp.task('parseless', function() {
    var parseless =
        gulp.src('src/less/*.less')
        .pipe(concat('index.less'))
        .pipe(less())
        .pipe(minifycss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('src/css'));

    return parseless;
})

//gulp压缩js文件
gulp.task('minifyjs', function() {
    var minifyjs =
        gulp.src('src/js/action.js')
        .pipe(uglify())
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(gulp.dest('src/js'))
})

//设定gulp default task
gulp.task('default', ['parseless', 'minifyjs'])
