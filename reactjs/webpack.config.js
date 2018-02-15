const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src')
};

module.exports = {
  devtool: 'source-map',
  entry: ['whatwg-fetch', 'babel-polyfill', path.join(paths.SRC, 'index.js')],
  output: {
    path: paths.DIST,
    filename: '[name].bundle.js'
  },
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
      template: path.join(paths.SRC, 'index.html'),
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
          use: ['css-loader', 'sass-loader', 'postcss-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  }
};
