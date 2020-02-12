const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

export default () => ({
  devtool: isDevelopment ? 'cheap-module-eval-source-map' : 'source-map',
});
