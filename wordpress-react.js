import merge from 'webpack-merge';
import pnp from './configuration/pnp';
import devtool from './configuration/devtool';
import stats from './configuration/stats';
import clean from './configuration/clean';
import babelReact from './configuration/babel-react';
import eslint from './configuration/eslint';
import wordpressExternals from './configuration/wordpress-externals';
import livereload from './configuration/livereload';
import codeSplitting from './configuration/code-splitting';
import extractStyles from './configuration/extract-styles';
import stylelint from './configuration/stylelint';
import images from './configuration/images';
import fonts from './configuration/fonts';
import assetsManifest from './configuration/assets-manifest';
import friendlyErrors from './configuration/friendly-errors';

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

export const config = merge(
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

export const create = (custom) => merge(config, custom);

export default create;
