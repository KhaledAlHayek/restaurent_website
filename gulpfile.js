const { watch, src, dest, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");

const buildStyle = () => {
  return src(["sass/**/*.sass"])
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(prefix("last 2 versions"))
    .pipe(dest("dist/"));
}

const watchTasks = () => {
  return watch("sass/**/*.sass", buildStyle);
}

exports.default = series(buildStyle, watchTasks);