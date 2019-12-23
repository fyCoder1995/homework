var gulp = require('gulp');

//创建gulp任务，
//第一个参数为任务的名称
//第二个参数为任务所依赖的其他任务（可以省略）
//第三个参数是执行任务所要运行的代码
gulp.task('copy-index',function () {
    //取到指定的文件
    gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
})

gulp.task('copy-html',function () {
    gulp.src('./src/html/*.html')
        .pipe(gulp.dest('./dist/html'))
})

gulp.task('copy-vendor',function () {
    gulp.src('./src/vendor/**/*.*')
        .pipe(gulp.dest('./dist/vendor'))
})

gulp.task('copy-assets',function () {
    gulp.src('./assets/**/*.*')
        .pipe(gulp.dest('./dist/assets'))
})

gulp.task('copy', gulp.parallel('copy-index','copy-html','copy-vendor','copy-assets'))