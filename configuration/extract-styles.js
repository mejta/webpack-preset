const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

module.exports = ({
  modules = false,
  filename = isDevelopment ? '[name].css' : '[name].[contenthash].css',
}) => {
  const styleRule = {
    test: /\.s?css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          sourceMap: true,
        },
      },
      {
        loader: require.resolve('css-loader'),
        options: {
          sourceMap: true,
          importLoaders: 2,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          sourceMap: true,
        },
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
          implementation: require('sass'),
        },
      },
    ],
  };

  const moduleRule = {
    test: /\.css$/,
    include: /\.module\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          sourceMap: true,
        },
      },
      {
        loader: require.resolve('css-loader'),
        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: true,
        },
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          sourceMap: true,
        },
      },
    ],
  };

  if (modules) {
    styleRule.exclude = /\.module\.css$/;
  }

  const rules = [
    styleRule,
    modules && moduleRule,
  ].filter(Boolean);

  return {
    module: {
      rules,
    },
    plugins: [
      new MiniCssExtractPlugin({ filename }),
    ],
  };
};
