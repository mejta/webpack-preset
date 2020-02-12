const WebpackManifestPlugin = requie('webpack-manifest-plugin');

module.exports = ({ filename = 'assets-manifest.json' }) => ({
  plugins: [
    new WebpackManifestPlugin({
      fileName: filename,
    }),
  ],
});
