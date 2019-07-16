var gulp = require('gulp');
var sprite = require('gulp-sprite-generator')

var spriteOutput = gulp.src("dist/assets/css/*.css")
    .pipe(sprite({
        baseUrl: "src/images-sprite",
        spriteSheetName: "sprite.png",
        spriteSheetPath: "dist/image"
    }));


const ImgSprite = () => spriteOutput.img.pipe(gulp.dest("dist/image"));


module.exports = ImgSprite;