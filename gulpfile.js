var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    stream = browserSync.stream,
    less = require('gulp-less'),
    cssmin = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack-stream'),
    script = require('child_process');

var config = {
    paths: {
        css: [

            './src/css/**/*.css'
        ],
        less: ['./src/less/**/*.less'],
        js: ['./src/**/*.js'],
        jsx: ['./src/**/*.jsx'],
        html: ['./src/**/*.html'],
        app: './src/app.js',
        images: './src/images/**/*.*',
        fonts: [
            './src/fonts/**/*.*'
        ]
    },
    dest: {
        style: 'static/styles/style.css',
        dist: 'dist/',
        less: 'src/css',
        images: 'dist/static/images',
        fonts: 'dist/static/fonts'
    }

};
gulp
    .task('clean', () => {
        console.log('cleaning dist directory...')
        del([config.dest.dist]).then((paths) => { console.log('Deleted files and folders:\n', paths.join('\n')); })
    })

.task('server', () => {
    browserSync.init({ server: { baseDir: 'dist' } });

})

.task('html', () => {
    console.log("copying html files...");
    return gulp.src(config.paths.html)
        .pipe(gulp.dest(config.dest.dist))
        .pipe(stream());
})

.task('images', () => {
        console.log("copying image files...");
        return gulp.src(config.paths.images)
            .pipe(gulp.dest(config.dest.images))
            .pipe(stream());
    })
    .task('fonts', () => {
        console.log("copying font files...");
        return gulp.src(config.paths.fonts)
            .pipe(gulp.dest(config.dest.fonts))
            .pipe(stream());
    })
    .task('less', () => {
        console.log('copying less files...');
        return gulp.src(config.paths.less)
            .pipe(less())
            .pipe(gulp.dest(config.dest.less))
            .pipe(stream());

    })

.task('css', ['less'], () => {
    console.log('merging css files...');
    return gulp.src(config.paths.css)
        .pipe(concat(config.dest.style))
        .pipe(gulp.dest(config.dest.dist))
        .pipe(stream());
})

.task('css:min', ['less'], () => {
        console.log('merging css files...');
        return gulp.src(config.paths.css)
            .pipe(concat(config.dest.style))
            .pipe(cssmin())
            .pipe(gulp.dest(config.dest.dist))
            .pipe(stream());
    })
    .task('js', () => {
        console.log('processing js files...');
        return gulp.src(config.paths.js)
            .pipe(webpack(require('./webpack.config.js')))
            .pipe(gulp.dest(config.dest.dist))
            .pipe(stream());

    })

.task('js:min', function() {
    console.log('processing js files and minifying...')
    return gulp.src(config.paths.js)
        .pipe(webpack(require('./webpack.config.min.js')))
        .pipe(gulp.dest(config.dest.dist))
        .pipe(stream());
})

.task('watch:css', () => {
        return gulp.watch(
            [config.paths.css, config.paths.less], ['css:min', browserSync.reload]
        );
    })

    .task('watch:js', () => {
        return gulp.watch(
            [config.dest], [browserSync.reload]
        );
    })
    .task('watch:html', () => {
        return gulp.watch(
            [config.paths.html, config.paths.images], ['html', 'images', browserSync.reload]
        );
    })
    /**
     * Compiling resources and serving application
     */

.task('start', ['html', 'fonts', 'images', 'css:min', 'js','server','watch:css', 'watch:html'])
    .task('bundle', ['html', 'fonts', 'images', 'css', 'js'])
    .task('bundle:min', ['html', 'fonts', 'images', 'css:min', 'js:min'])
    .task('default', ['start']);
