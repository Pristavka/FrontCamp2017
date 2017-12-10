const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
  devtool: 'source-map',
  entry: ['whatwg-fetch', 'babel-polyfill', path.join(paths.SRC, 'app.js')],
  output: {
    path: paths.DIST,
    filename: 'app.bundle.[hash].js',
    publicPath: 'http://localhost:3000/'
  },
  devServer: {
    port: 3000,
    hot: true,
    stats: {
      colors: true
    },
    overlay: {
      errors: true
    }
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
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
};
