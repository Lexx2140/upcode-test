module.exports = function() {
    $.gulp.task('watch', function() {
        $.gulp.watch($.path.watch.scss, $.gulp.series('scss'));
        $.gulp.watch($.path.watch.js, $.gulp.series('js'));
    });
};