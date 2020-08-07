const gulp = require("gulp");

const serve = require("./gulp/tasks/serve");
const pug2html = require("./gulp/tasks/pug2html");
const pug2htmlYiiCommon = require("./gulp/tasks/pug2htmlYiiCommon");
const pug2htmlYiiIncludes = require("./gulp/tasks/pug2htmlYiiIncludes");
const pug2htmlYiiBlog = require("./gulp/tasks/pug2htmlYiiBlog");
const pug2htmlYiiManual = require("./gulp/tasks/pug2htmlYiiManual");
const styles = require("./gulp/tasks/styles");
// const assetsYii = require("./gulp/tasks/assetsYii");
const stylesYii = require("./gulp/tasks/stylesYii");
const script = require("./gulp/tasks/script");
const scriptYii = require("./gulp/tasks/scriptYii");
const fonts = require("./gulp/tasks/fonts");
const fontsYii = require("./gulp/tasks/fontsYii");
// const i18n = require('./gulp/tasks/i18n')
const imageMinify = require("./gulp/tasks/imageMinify");
const imageMinifyYii = require("./gulp/tasks/imageMinifyYii");
const imageToWebp = require("./gulp/tasks/imageToWebp.js");
const imageToWebpYii = require("./gulp/tasks/imageToWebpYii.js");
const clean = require("./gulp/tasks/clean");
// const copyDependencies = require('./gulp/tasks/copyDependencies')
const copyImages = require("./gulp/tasks/copyImages");
const lighthouse = require("./gulp/tasks/lighthouse");
const svgSprite = require("./gulp/tasks/svgSprite");
const svgSpriteYii = require("./gulp/tasks/svgSpriteYii");

const dev = gulp.parallel(
  pug2html,
  styles,
  script,
  fonts,
  imageToWebp,
  copyImages,
	svgSprite
);

const build = gulp.series(
  clean,
  pug2html,
  styles,
  script,
  fonts,
  imageMinify,
  imageToWebp,
  svgSprite,
);
const buildY = gulp.series(
  pug2htmlYiiCommon,
  pug2htmlYiiIncludes,
	pug2htmlYiiBlog,
	pug2htmlYiiManual,
  stylesYii,
  scriptYii
  // fontsYii,
  // imageMinifyYii,
  // imageToWebpYii,
  // svgSpriteYii,
  // svgReplaceOrigYii
);
const buildYF = gulp.series(
  pug2htmlYiiCommon,
  pug2htmlYiiIncludes,
  stylesYii,
  scriptYii,
  fontsYii,
  imageMinifyYii,
  imageToWebpYii,
  svgSpriteYii,
);

module.exports.start = gulp.series(dev, serve);
module.exports.build = build;
module.exports.buildY = buildY;
module.exports.buildYF = buildYF;

module.exports.lighthouse = gulp.series(lighthouse);
