module.exports = ({ filename = '[name].[contenthash].[ext]' }) => ({
  module: {
    rules: [
      {
        test: /.(eot|woff|woff2|ttf|otf)$/,
        loader: require.resolve('file-loader'),
        options: {
          name: filename,
          outputPath: 'fonts',
        },
      },
    ],
  },
});
