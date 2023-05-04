const { watch, src, dest, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require("gulp-autoprefixer");

const buildStyle = () => {
  return src(["****path****"])
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(prefix("last 2 versions"))
    .pipe(dest("****destination path****"));
}

const watch = () => {
  return watch("****path****", buildStyle);
}

exports.default = series(buildStyle, watch);