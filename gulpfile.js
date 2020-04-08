//Gulp version 4.0.2

const gulp = require ('gulp');
const sass = require ('gulp-sass');
const autoprefixer = require ('gulp-autoprefixer');
// const imagemin = require ('gulp-imagemin');

const paths = {
  styles: {
    src: 'src/*.scss',
    src2: 'src/**/*.scss',
    dest: 'src'
  }
  // imagesPath: {
  //   src: './assets/img/full/**/*.jpg',
  //   dest: './assets/img/compressed'
  // }
};

const compileSass = () => {
  return gulp.src(paths.styles.src)
  .pipe(sass({
    outputStyle: 'expanded',
    sourceComments: true
  }))
  .pipe(autoprefixer({
    versions: ['last 2 browsers']
  }))
  .pipe(gulp.dest(paths.styles.dest));
};

// const compressImages = () => {
//   return gulp.src(paths.imagesPath.src)
//   .pipe(imagemin())
//   .pipe(gulp.dest(paths.imagesPath.dest));
// };

const watch = () => {
  gulp.watch(paths.styles.src2, compileSass);
  gulp.watch(paths.styles.src, compileSass);
  // gulp.watch(paths.imagesPath.src, compressImages);
};

const build = gulp.series(watch);

exports.style = compileSass;
// exports.compressImage = compressImages;
exports.watch = watch;
exports.build = build;
exports.default = build;

