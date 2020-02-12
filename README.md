# Webpack presets

Webpack presets for my projects.

Includes presets for:

* WordPress with React (wordpressReact)

## Usage: WordPress with React (wordpressReact)

1. Add the dependency: `yarn add -D webpack webpack-cli https://github.com/mejta/webpack-preset.git#master`
2. Add config for `babel`, `eslint`, `postcss`, `stylelint`
3. Create `webpack.config.js`

```js
import path from 'path';
import { wordpressReact } from 'webpack-preset';

export default wordpressReact({
  entry: {
    app: './assets/theme.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    jsonpFunction: 'myAppJsonp',
  },
});
```
