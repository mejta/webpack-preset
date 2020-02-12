import eslintCodeframeFormatter from 'eslint-codeframe-formatter';

export default () => ({
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
