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
define('MY_PLUGIN_URL', plugin_dir_url(__FILE__));
define('MY_PLUGIN_DIR', __DIR__);

add_action('wp_enqueue_scripts', 'my_enqueue_scripts');
function my_enqueue_scripts() {
  $assets = json_decode(file_get_contents(MY_PLUGIN_DIR . '/build/assets-manifest.json'), true);
  $buildUrl = MY_PLUGIN_URL . 'build/';
  
  wp_enqueue_script('app-vendor', $buildUrl . $assets['vendors~app.js'], ['react', 'react-dom'], false, true);
  wp_enqueue_script('app-main', $buildUrl . $assets['app.js'], ['app-vendor'], false, true);
  wp_localize_script('app-main', 'AppPublicPath', $buildUrl);
}
```

5. Add public path in your `./assets/app.js` file

```js
__webpack_public_path__ = window.AppPublicPath;

// rest of the file
```
