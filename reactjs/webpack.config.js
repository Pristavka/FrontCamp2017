const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const paths = {
  PUBLIC: path.resolve(__dirname, 'public'),
  frontSRC: path.resolve(__dirname, 'src/FE'),
  backSRC: path.resolve(__dirname, 'src/BE')
};

const frontConfig = {
  entry: path.join(paths.frontSRC, 'index.js'),
  output: {
    path: paths.PUBLIC,
    filename: './[name].bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('./css/style.bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {loader: 'sass-loader'},
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer()]
              }
            }
          ]
        })
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  }
};

const backConfig = {
  entry: path.join(paths.backSRC, 'index.js'),
  target: 'node',
  output: {
    path: paths.PUBLIC,
    filename: 'server.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'css-loader/locals'
          },
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  }
};

module.exports = [frontConfig, backConfig];
