const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  APP: path.resolve(__dirname, 'app'),
  DIST: path.resolve(__dirname, 'dist')
};

module.exports = {
  devtool: 'source-map',
  entry: ['whatwg-fetch', 'babel-polyfill', path.join(paths.APP, 'app.module.js')],
  output: {
    path: paths.DIST,
    filename: '[name].bundle.js'
  },
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    stats: {colors: true},
    overlay: {errors: true},
    compress: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(paths.APP, 'index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
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
            options: {name: 'data/[name].[ext]'}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  }
};
