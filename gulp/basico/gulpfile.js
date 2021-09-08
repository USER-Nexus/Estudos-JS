const gulp = require('gulp')
const { series, parallel } = require('gulp')

const task1 = cb => {
    console.log("Task 1");
    return cb()
}

const task2 = cb => {
    console.log("Task 2");
    return cb()
}

function copy(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const end = cb => {
    console.log("End");
    return cb()
}

module.exports.default = series(
    parallel(task1, task2),
    copy,
    end
)