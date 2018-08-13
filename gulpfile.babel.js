import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import htmlclean from 'gulp-htmlclean';
import imagemin from 'gulp-imagemin';
import del from 'del';

const paths = {
  html: {
    src: 'index.html',
    dest: 'dist'
  },
  css: {
    src: 'assets/css/*.css',
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

export function css() {
  return gulp.src(paths.css.src)
		.pipe(cleanCSS())
		.pipe(gulp.dest(paths.css.dest));
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

const build = gulp.series(clean, gulp.parallel(html, css, js, img));
gulp.task('build', build);

export default build;
