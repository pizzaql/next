import gulp from 'gulp';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import htmlclean from 'gulp-htmlclean';
import imagemin from 'gulp-imagemin';
import del from 'del';

const paths = {
  html: {
    src: 'index.html',
    dest: 'dist'
  },
  scss: {
    src: 'assets/scss/*.scss',
    dest: 'dist/assets/css'
  },
  js: {
  	src: 'assets/js/*.js',
    dest: 'dist/assets/js'
  },
  img: {
  	src: 'assets/images/*',
    dest: 'dist/assets/images'
  }
};

export const clean = () => del([ 'dist' ]);

export function html() {
  return gulp.src(paths.html.src)
		.pipe(htmlclean())
    .pipe(gulp.dest(paths.html.dest));
}

export function scss() {
  return gulp.src(paths.scss.src)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest(paths.scss.dest));
}

export function js() {
  return gulp.src(paths.js.src)
		.pipe(uglify())
		.pipe(gulp.dest(paths.js.dest));
}

export function img() {
  return gulp.src(paths.img.src)
    .pipe(imagemin([
      imagemin.optipng(),
      imagemin.svgo()
]))
		.pipe(gulp.dest(paths.img.dest));
}

const build = gulp.series(clean, gulp.parallel(html, scss, js, img));
gulp.task('build', build);

export default build;
