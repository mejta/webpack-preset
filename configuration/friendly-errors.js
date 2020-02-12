import path from 'path';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import notifier from 'node-notifier';

var icon = path.join(__dirname, '../icon.png');

export default () => ({
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          icon,
        });
      }
    }),
  ],
});
