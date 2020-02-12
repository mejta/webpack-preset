import LiveReloadPlugin from 'webpack-livereload-plugin';

export default () => ({
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true,
      protocol: 'http',
      hostname: 'localhost',
    }),
  ],
});
