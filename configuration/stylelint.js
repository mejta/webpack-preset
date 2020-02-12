const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const stylelintFormatterPretty = require('stylelint-formatter-pretty');

module.exports = () => ({
  plugins: [
    new StylelintWebpackPlugin({
      formatter: stylelintFormatterPretty,
    }),
  ],
});
