const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}
const PORT = 8080;

module.exports = {
  mode,
  entry: './src/client/index.js',
  output: {
    publicPath: `http://localhost:${PORT}/`,
    filename: 'client-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['env'] },
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  devServer: {
    host: '0.0.0.0',
    port: PORT,
    headers: { 'Access-Control-Allow-Origin': 'http://localhost:8000' },
    hot: true,
    stats: {
      hash: false,
      version: false,
      chunks: false,
    },
  },
};
