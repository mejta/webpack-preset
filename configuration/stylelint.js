import StylelintWebpackPlugin from 'stylelint-webpack-plugin';
import stylelintFormatterPretty from 'stylelint-formatter-pretty';

export default () => ({
  plugins: [
    new StylelintWebpackPlugin({
      formatter: stylelintFormatterPretty,
    }),
  ],
});
