import gulp from 'gulp'
import gulpif from 'gulp-if'
import concat from 'gulp-concat'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import named from 'vinyl-named'
import livereload from 'gulp-livereload'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import { log, colors } from "gulp-util";
import args from './util/args'

gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])
    // 错误处理
    .pipe(plumber({
      errorHandler() {

      }
    }))
    // 命名
    .pipe(named())
    // 编译
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel'
        }]
      }
    }), null, (err,status) => {
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false
      }))
    })
    // 指定生成目录
    .pipe(gulp.dest('server/public/js'))
    // 重命名
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
    // 压缩
    .pipe(uglify({
      compress: {
        properties:false
      },
      output: {
        quote_keys: true
      }
    }))
    // 再生成
    .pipe(gulp.dest('server/public/js'))
    // 监听
    .pipe(gulpif(args.watch, livereload()))
})
