export default () => ({
  output: {
    pathinfo: false,
  },
  resolve: {
    symlinks: false,
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        parser: {
          requireEnsure: false,
        },
      },
    ],
  },
});
