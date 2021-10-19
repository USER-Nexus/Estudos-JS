const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function jsTransformer(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ("env")
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('code.min.js'))
        .pipe(gulp.dest('build'))
}

function end(cb) {
    console.log('End')
    return cb()
}

exports.default = series(jsTransformer, end)