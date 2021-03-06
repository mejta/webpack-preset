const imageminGifsicle = require('imagemin-gifsicle');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminSvgo = require('imagemin-svgo');

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';

module.exports = ({ filename = '[name].[contenthash].[ext]' }) => ({
  module: {
    rules: [
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: 8192,
              name: filename,
              outputPath: 'images',
            },
          },
          {
            loader: require.resolve('img-loader'),
            options: {
              plugins: isProduction && [
                imageminGifsicle({
                  interlaced: false,
                }),
                imageminMozjpeg({
                  progressive: true,
                  arithmetic: false,
                }),
                imageminPngquant({
                  floyd: 0.5,
                  speed: 2,
                }),
                imageminSvgo({
                  plugins: [
                    { removeTitle: true },
                    { cleanupAttrs: true },
                    { removeXMLProcInst: true },
                    { removeComments: true },
                    { removeMetadata: true },
                    { removeXMLNS: false },
                    { removeEditorsNSData: true },
                    { removeEmptyAttrs: true },
                    { convertPathData: true },
                    { convertTransform: true },
                    { removeUnusedNS: true },
                    { mergePaths: true },
                    { convertShapeToPath: true },
                  ],
                }),
              ],
            },
          },
        ],
      },
    ],
  },
});
