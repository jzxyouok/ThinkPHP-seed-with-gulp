// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint'); // js 代码检查
var sass = require('gulp-sass'); // 编译sass
var concat = require('gulp-concat'); // 合并文件
var uglify = require('gulp-uglify'); // 混淆压缩js代码
var rename = require('gulp-rename'); // 重命名文件
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest('./Public/static'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./Public/static'));
});

// 监控文件
gulp.task('watch', function() {
    gulp.watch(['./src/js/*.js', './src/scss/*.scss'], ['lint', 'sass', 'scripts']);
});

// 默认任务
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);