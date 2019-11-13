module.exports = function() {
    $.gulp.task('watch', function() {

        $.gulp.watch($.path.watch.scss, {delay:1000}, $.gulp.series('scss'));
        $.gulp.watch($.path.watch.js, $.gulp.series('js'));
    });
};
