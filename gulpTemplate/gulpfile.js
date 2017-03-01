//https://www.npmjs.com/package/package

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat');

gulp.task('less', function () {
    return gulp.src('./source/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./prod'));
});

//gulp less