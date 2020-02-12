import PnpWebpackPlugin from 'pnp-webpack-plugin';

export default () => ({
  resolve: {
    plugins: [PnpWebpackPlugin],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
});
