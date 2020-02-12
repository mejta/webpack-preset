const merge = require('webpack-merge');
const pnp = require('../configuration/pnp');
const devtool = require('../configuration/devtool');
const stats = require('../configuration/stats');
const clean = require('../configuration/clean');
const babelReact = require('../configuration/babel-react');
const eslint = require('../configuration/eslint');
const wordpressExternals = require('../configuration/wordpress-externals');
const livereload = require('../configuration/livereload');
const codeSplitting = require('../configuration/code-splitting');
const extractStyles = require('../configuration/extract-styles');
const stylelint = require('../configuration/stylelint');
const images = require('../configuration/images');
const fonts = require('../configuration/fonts');
const assetsManifest = require('../configuration/assets-manifest');
const friendlyErrors = require('../configuration/friendly-errors');

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const config = merge(
  pnp(),
  devtool(),
  stats(),
  clean(),
  babelReact(),
  eslint(),
  wordpressExternals(),
  livereload(),
  codeSplitting(),
  extractStyles({
    modules: true,
    filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
  }),
  stylelint(),
  images({
    filename: isDevelopment ? '[name].[ext]' : '[name].[contenthash].[ext]',
  }),
  fonts({
    filename: isDevelopment ? '[name].[ext]' : '[name].[contenthash].[ext]',
  }),
  assetsManifest({
    filename: 'assets-manifest.json'
  }),
  friendlyErrors(),
);

module.exports = config;
