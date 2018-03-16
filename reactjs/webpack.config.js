const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');

const frontConfig = {
  entry: './src/FE/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
                localIdentName: '[local]'
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
  plugins: [
    new ExtractTextPlugin({
      filename: 'public/css/[name].bundle.css'
    }),
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    })
  ]
};

const backConfig = {
  entry: './src/BE/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        // exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'css-loader/locals',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ]
};

module.exports = [frontConfig, backConfig];
