var
gulp = require('gulp'),
newer = require('gulp-newer'),
sass = require('gulp-sass'),
postcss = require('gulp-postcss'),
assets = require('postcss-assets'),
autoprefixer = require('autoprefixer'),
mqpacker = require('css-mqpacker'),
cssnano = require('cssnano'),

folder = {
    src: 'app/',
    build: 'build/'
};

gulp.task('moveFiles', function(){
    var out = folder.build;
    return gulp.src(folder.src + '**/*.js')
    .pipe(newer(out))
    .pipe(gulp.dest(out))
});

gulp.task('watch', function(){
    gulp.watch(folder.src + '**/*',['moveFiles']);
});