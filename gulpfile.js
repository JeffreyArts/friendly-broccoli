var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');


////////////////////////////////////////////////////////////////////////////////
// Configuration
////////////////////////////////////////////////////////////////////////////////

// Watchable directories/files      ////////////////////////////////////////////
var watching   = {
    default: {
        js: [
			'./scripts/*.js',
			'./scripts/**/*.js'
        ]
    }
};

// Source file(s)       ////////////////////////////////////////////////////////
var source    = {
    default: {
        js: [
            './scripts/index.js',
            './scripts/layer.js',
            './scripts/mask.js',
            
            './scripts/helper-functions/effects/blur.js',
            './scripts/helper-functions/canvas.js',
            './scripts/helper-functions/general.js',
            './scripts/helper-functions/gradient.js',
            './scripts/helper-functions/image.js',
            './scripts/helper-functions/layer.js',

            './scripts/effects/blur.js',

            './scripts/draw/gradient.js',
            './scripts/draw/image.js',

        ]
    }
};

// Destination directory        ////////////////////////////////////////////////
var destination    = {
    default: {
        js:     './test/lib'
    }
};

////////////////////////////////////////////////////////////////////////////////
// Variables
////////////////////////////////////////////////////////////////////////////////

var app = '';
var jsName = '';
gulp.task('var:default',function() {
	app     = 'default';
	jsName  = 'friendly-broccoli.js';
});















////////////////////////////////////////////////////////////////////////////////
// Javascript
////////////////////////////////////////////////////////////////////////////////

gulp.task('dev-js',function() {
    return gulp.src(source[app].js)
            .pipe(concat(jsName))
        	.pipe(gulp.dest(destination[app].js));
});


gulp.task('watch:dev-js',function() {
    gulp.watch(watching[app].js,['dev-js']);
});



////////////////////////////////////////////////////////////////////////////////
// Callable Tasks
////////////////////////////////////////////////////////////////////////////////

// apps/default
gulp.task('default', ['var:default', 'dev-js', 'watch:dev-js']);