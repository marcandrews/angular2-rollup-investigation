'use strict';

const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: {
    'polyfills': './src/polyfills-aot.js',
    'app': './src/main-aot.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist/webpack-aot'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[chunkhash].js.map',
    chunkFilename: '[name].chunk.[chunkhash].js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'raw',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: './src/app',
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css?sourceMap',
        }),
      },
      {
        test: /\.css$/,
        include: './src/app',
        loader: 'raw',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'polyfills'],
    }),


    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.resolve(__dirname, 'src') // location of your src
    ),

    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true,
      },
      compress: {
        warnings: false,
      },
    }),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
  },
};
