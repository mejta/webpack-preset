const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

module.exports = () => ({
  devtool: isDevelopment ? 'cheap-module-eval-source-map' : 'source-map',
});
