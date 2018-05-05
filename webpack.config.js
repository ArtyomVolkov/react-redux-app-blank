const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = 'localhost';
const PORT = '1111';
// Loaders
const RULES = {
  styles: {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      use: [ {
        loader: "css-loader",
        options: {
          sourceMap: true,
          minimize: true,
          url: false
        }
      },
        {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    })
  },
  scripts: {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [ 'es2015', 'react', 'stage-2' ],
        plugins: []
      }
    }
  }
};
// Module
const MODULE = {
  rules: [
    RULES.styles,
    RULES.scripts
  ]
};
// Webpack DevServer
const DEV_SERVER = {
  contentBase: './build',
  hot: true,
  inline: true,
  quiet: false,
  noInfo: false,
  historyApiFallback: true,
  host: HOST,
  port: PORT,
  stats: {
    colors: true
  }
};
// Plugins
const PLUGINS = [
  new ExtractTextPlugin({
    filename: './style.bundle.css',
    allChunks: true,
  })
];
// CONFIG
module.exports = {
  entry: [
    './src/index.js',
    './src/app/styles/main.scss'
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'main.min.js',
    path: path.resolve('./build'),
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.js', '.scss' ],
    modules: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  devServer: DEV_SERVER,
  module: MODULE,
  plugins: PLUGINS,
  stats: {
    children: false
  }
};