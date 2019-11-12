module.exports = function() {

    // Compile SASS & Build CSS for development only
    $.gulp.task('scss', function() {
        return $.gulp.src($.path.src.scss)
            .pipe($.gp.plumber({ errorHandler: $.onError }))
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            // .pipe($.gp.autoprefixer({
            //     // browsers: ['last 2 versions'],
            //     cascade: true,
            //     grid: false
            //     // flexbox: "no-2009"
            // }))
            .pipe($.gp.shorthand())
            .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gulp.dest($.path.build.css))
            .pipe($.gp.notify({ message: 'SCSS compiled (dev mode)!' }));
    });

    // Build CSS for production
    $.gulp.task('scss:prod', function() {
        return $.gulp.src($.path.src.scss)
            .pipe($.gp.plumber({ errorHandler: $.onError }))
            .pipe($.gp.sass())
            // .pipe($.gp.concatCss('styles.css'))
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
            .pipe($.gp.notify({ message: 'SCSS compiled! (production mode)' }));
    });
};