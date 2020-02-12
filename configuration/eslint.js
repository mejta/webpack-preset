const eslintCodeframeFormatter = require('eslint-codeframe-formatter');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: require.resolve('eslint-loader'),
            options: {
              formatter: eslintCodeframeFormatter,
            },
          },
        ],
      },
    ],
  },
});
