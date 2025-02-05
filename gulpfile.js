// gulpfile.js

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber'); // Opcional: Para manejar errores sin detener Gulp

// Ruta de los archivos SCSS y destino CSS
const paths = {
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'src/css'
  }
};

// Función para compilar SCSS a CSS
function compileSass() {
  return gulp.src(paths.scss.src)
    .pipe(plumber()) // Opcional: Evita que Gulp se detenga ante errores
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.scss.dest));
}

// Función para observar cambios en archivos SCSS
function watchFiles() {
  // Inicia la tarea 'compileSass' cuando hay cambios
  return gulp.watch(paths.scss.src, compileSass);
}

// Tarea por defecto: Compila SCSS y luego observa cambios
const defaultTask = gulp.series(compileSass, watchFiles);

// Exportar las tareas para que Gulp las reconozca
exports.compileSass = compileSass;
exports.watch = watchFiles;
exports.default = defaultTask;
