///////// Inicializacao das variaveis /////////////////////////////////////////////////////////////

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	rimraf = require('gulp-rimraf'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	less = require('gulp-less'),
	jshint = require('gulp-jshint'),
	imagemin = require('gulp-imagemin')
	cache = require('gulp-cache'),
	coffee = require('gulp-coffee'),
	stylish = require('jshint-stylish'),
	jade = require('gulp-jade'),
	htmlmin = require('gulp-html-minifier'),
	install = require('gulp-install'),
	nwbuilder = require('node-webkit-builder'),
	minifyCSS = require('gulp-minify-css');

var config = {
};

///////// Tarefas de background ////////////////////////////////////////////////////////////////

//-----------------------------------------------------------------------------------------
// Compilando SASS, SCSS e LESS
//-----------------------------------------------------------------------------------------
gulp.task('compass', function() {
	return gulp.src(['src/main/styles/scss/**/*.scss', 'src/main/styles/sass/**/*.sass'])
	.pipe(sass({ style: 'expanded' }))
	.pipe(gulp.dest('webapp/assets/styles'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifyCSS())
	.pipe(gulp.dest('webapp/assets/styles'));
});

gulp.task('less', function () {
	return gulp.src('src/main/styles/less/**/*.less')
	.pipe(less())
	.pipe(rename({suffix: '.min'}))
	.pipe(minifyCSS())
	.pipe(gulp.dest('webapp/assets/styles'));
});

gulp.task('css', function () {
	return gulp.src('src/main/styles/css/**/*.css')
	.pipe(rename({suffix: '.min'}))
	.pipe(minifyCSS())
	.pipe(gulp.dest('webapp/assets/styles'));
});



//-----------------------------------------------------------------------------------------
// Otimizando as imagens
//-----------------------------------------------------------------------------------------
gulp.task('images',['copy_icons'], function() {
	return gulp.src(['src/main/resources/images/**/*.{gif,jpg,jpeg,png}', '!src/main/resources/images/icons/**/*.{icns,ico}'])
	.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
	.pipe(gulp.dest('webapp/assets/images'));
});




//-----------------------------------------------------------------------------------------
// Limpando o projeto
//-----------------------------------------------------------------------------------------
gulp.task('clear', function() {
	return gulp.src(['webapp/assets', 'webapp/views', 'webapp/node_modules', 'webapp/bower_components', 'cache'], { read: false })
	.pipe(rimraf({ force: true }));
});

gulp.task('clear_build', function() {
	return gulp.src(['build/**/*'], { read: false })
	.pipe(rimraf({ force: true }));
});




//-----------------------------------------------------------------------------------------
// Validando e compilando o Javascript e Coffeescript
//-----------------------------------------------------------------------------------------
gulp.task('jscript', function() {
	return gulp.src('src/main/scripts/javascript/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter(stylish))
    //.pipe(concat('main.js'))
    .pipe(gulp.dest('webapp/assets/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('webapp/assets/scripts'));
});


gulp.task('coffeescript', function() {
	return gulp.src('src/main/scripts/coffeescript/**/*.coffee')
	.pipe(coffee({bare:true}))
	.pipe(jshint())
	.pipe(jshint.reporter(stylish))
	.pipe(rename({ suffix: '.min' }))
	.pipe(uglify())
	.pipe(gulp.dest('webapp/assets/scripts'));
});



//-----------------------------------------------------------------------------------------
// Copiando arquivos para o publico
//-----------------------------------------------------------------------------------------
gulp.task('copyfiles_fonts', function() {
	gulp.src('src/main/resources/**/*.{eot,svg,ttf,woff,woff2}')
	.pipe(gulp.dest('webapp/assets/fonts'));
});


gulp.task('copy_icons', function() {
	gulp.src('src/main/resources/images/icons/**/*.{icns,ico}')
	.pipe(gulp.dest('webapp/assets/images/icons'));
});



//-----------------------------------------------------------------------------------------
// Compilando arquivos Jade, HTML
//-----------------------------------------------------------------------------------------
gulp.task('jade', function() {
	return gulp.src(['src/main/templates/jade/**/*.jade', '!src/main/templates/jade/layout/**/*.jade'])
	.pipe(jade())
	.pipe(gulp.dest('webapp/views'));
});

gulp.task('html', function() {
	return gulp.src('src/main/templates/html/**/*.{html, htm}')
	.pipe(htmlmin({collapseWhitespace: true, collapseBooleanAttributes: true, removeEmptyAttributes: true}))
	.pipe(gulp.dest('webapp/views'));
});



//-----------------------------------------------------------------------------------------
// Recompilando conforme as alteracoes
//-----------------------------------------------------------------------------------------
gulp.task('watch', function() {
	gulp.watch('src/main/resources/images/**/*.{gif,jpg,jpeg,png}', ['images']);
	gulp.watch('src/main/resources/images/icons/**/*.{icns,ico}', ['copy_icons']);
	gulp.watch('src/main/scripts/javascript/**/*.js', ['jscript']);
	gulp.watch('src/main/scripts/coffeescript/**/*.coffee', ['coffeescript']);
	gulp.watch(['src/main/styles/sass/**/*.sass', 'src/main/styles/scss/**/*.scss'], ['compass']);
	gulp.watch('src/main/styles/less/**/*.less', ['less']);
	gulp.watch('src/main/styles/css/**/*.css', ['css']);
	gulp.watch('src/main/templates/jade/**/*.jade', ['jade']);
	gulp.watch('src/main/templates/html/**/*.{html,htm}', ['html']);
});


//-----------------------------------------------------------------------------------------
// Build o webapp com o Node Webkit
//-----------------------------------------------------------------------------------------
gulp.task('build',['clear_build'],function() {
	var nw = new nwbuilder({
        version: '0.11.0',
        files: 'webapp/**/**',
        buildDir:'build',
        macIcns: 'webapp/assets/images/icons/icon.icns',
        macPlist: {mac_bundle_id: 'myPkg'},
        platforms: ['win32', 'win64', 'osx32', 'osx64']
    });
	return nw.build();
});



///////// Tarefas globais /////////////////////////////////////////////////////////////////////

//-----------------------------------------------------------------------------------------
// Inicializando projeto
//-----------------------------------------------------------------------------------------
gulp.task('init',['clear'], function() {
	return gulp.src(['webapp/bower.json', 'webapp/package.json'])
	.pipe(install());
});


//-----------------------------------------------------------------------------------------
// Executa o pacotao de tarefas em background inclusive o watch
//-----------------------------------------------------------------------------------------
gulp.task('default', ['init'], function() {
	gulp.start('images', 'compass', 'less', 'css', 'jscript', 'coffeescript', 'jade', 'html');
});