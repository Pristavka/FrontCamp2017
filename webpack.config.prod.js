const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  LOADERS: path.resolve(__dirname, 'loaders')
};

module.exports = {
  entry: ['whatwg-fetch', 'babel-polyfill', path.join(paths.SRC, 'app.js')],
  output: {
    path: paths.DIST,
    filename: '[name].bundle.[hash].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.[hash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [':data-src'],
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {loader: 'sass-loader'},
            {loader: 'postcss-loader'}
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'img/[name].[ext]',
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {name: 'data/[name].[hash].[ext]'}
          },
          {loader: 'custom-loader'}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  resolveLoader: {
    alias: {'custom-loader': path.join(paths.LOADERS, 'custom-loader.js')}
  }
};
