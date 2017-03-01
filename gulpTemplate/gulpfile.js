//https://www.npmjs.com/package/package

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat');

gulp.task('less', function () {
    return gulp.src('./source/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./prod'));
});

gulp.task('scripts', function() {
    return gulp.src([
        './node_modules/angular/angular.min.js',
        './source/app.js',
        './source/components/msgShowDirective.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./prod'));
});

gulp.task('watch', function() {
    gulp.watch('./source/**/*.less', ['less']);
    gulp.watch('./source/**/*.js', ['scripts']);
});

gulp.task('default', ['less', 'scripts', 'watch']);

//gulp