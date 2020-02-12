import WebpackManifestPlugin from 'webpack-manifest-plugin';

export default ({ filename = 'assets-manifest.json' }) => ({
  plugins: [
    new WebpackManifestPlugin({
      fileName: filename,
    }),
  ],
});
