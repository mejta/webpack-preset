# Webpack presets

Webpack presets for my projects.

Includes presets for:

* WordPress with React (wordpressReact)

## Usage: WordPress with React (wordpressReact)

The preset contains code splitting, therefore you must specify public path so that the JS knows, from where load additional files. All the generated file names are stored in `assets-manifest.json` file in the build folder. From that file you can get the actual path/url to your files.

1. Add the dependency: `yarn add -D webpack webpack-cli https://github.com/mejta/webpack-preset.git#master`
2. Add config for `babel`, `eslint`, `postcss`, `stylelint`
3. Create `webpack.config.js`

```js
import path from 'path';
import { wordpressReact } from 'webpack-preset';

export default wordpressReact({
  entry: {
    app: './assets/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    jsonpFunction: 'myAppJsonp',
  },
});
```

4. Enqueue the file in your plugin or theme

```php
add_action('wp_enqueue_scripts', 'my_enqueue_scripts');
function my_enqueue_scripts() {
  wp_enqueue_script('app-vendor', 'https://yoursite/url-to-vendors~app.js', ['react', 'react-dom'], false, true);
  wp_enqueue_script('app-main', 'https://yoursite/url-to-app.js', ['app-vendor'], false, true);
  wp_localize_script('app-main', 'AppPublicPath', 'https://yoursite/url-to-build-folder/');
}
```

5. Add public path in your `./assets/app.js` file

```js
__webpack_public_path__ = window.AppPublicPath;

// rest of the file
```
