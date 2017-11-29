var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function(){
	
	browserSync.init({
		notify:false,
		server:{
			baseDir: "app"	
			}
		});						
							
	watch('./app/ux-samples.html', function(){
		browserSync.reload();
		});
	
    //watch any future folders in styles, watch any .css files
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
		});
    
    
	});


//styles is a dependency to cssInject.  cssInject wont begin until styles has run.
gulp.task('cssInject',['styles'] , function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
	});	


