# Angular2 Rollup Investigation
This repo investigates using Rollup to build a simple Angular2 app, and compares it with that of Webpack.


## tl;dr
The following table illustrates the sizes (kB) of the different _minified_ builds:

|             | app.js | polyfills.js | app.js.gz | polyfills.js.gz |
|-------------|-------:|-------------:|----------:|----------------:|
| Webpack     |    709 |           98 |       146 |              31 |
| Rollup      |    515 |           98 |       118 |              31 |
| AoT+Webpack |    319 |          104 |        62 |              32 |
| AoT+Rollup  |    205 |           98 |        46 |              31 |


## Getting started

To install, run the following:
```
git clone git@github.com:marcandrews/angular2-rollup-investigation.git
cd angular2-rollup-investigation
npm install
```
Look in the `dist` folder for Webpack, Rollup, AoT+Webpack and AoT+Rollup builds.

## Serving builds

You can also serve builds using `webpack-dev-server`/`lite-server` using the following commands: `npm run serve:webpack`, `npm run serve:webpack-aot`, `npm run serve:rollup` or `npm run serve:rollup-aot`
