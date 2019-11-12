module.exports = function() {

// Build CSS for development only
    $.gulp.task('css', function() {
        return $.gulp.src($.path.src.css)
            .pipe($.gp.plumber({ errorHandler: $.onError }))
            .pipe($.gp.concatCss('styles.min.css'))
            .pipe($.gulp.dest($.path.build.css))
            .pipe($.gp.notify({ message: 'CSS compiled (dev mode)!' }));
    });

// Build CSS for production
    $.gulp.task('css:prod', function() {
        return $.gulp.src($.path.src.css)
            .pipe($.gp.plumber({ errorHandler: $.onError }))
            .pipe($.gp.concatCss('styles.css'))
            .pipe($.gp.shorthand())
            .pipe($.gp.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe($.gulp.dest($.path.build.css))
            .pipe($.gp.csso())
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gulp.dest($.path.build.css))
            .pipe($.gp.notify({ message: 'CSS compiled! (production mode)' }));
    });
};