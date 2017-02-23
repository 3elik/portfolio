'use  strict';

module.exports = function() {
  $.gulp.task('sprite:img', function() {
    var spriteData =  $.gulp.src('./source/sprite/{*.png, *.gif}')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        padding: 5,
        algorithm: 'binary-tree',
        imgPath: '../../assets/img/sprite.png'
      }));
    var imgStream = spriteData.img
      .pipe($.gulp.dest('./source/images'));
    var cssStream = spriteData.css
      .pipe($.gulp.dest('./source/style/common'));

    return $.merge(imgStream, cssStream);
  });
};