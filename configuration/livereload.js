const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = () => ({
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true,
      protocol: 'http',
      hostname: 'localhost',
    }),
  ],
});
