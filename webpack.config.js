const path = require('path');
const webpack = require('webpack');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
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
    contentBase: path.join(__dirname, 'public/'),
    port: 8000,
    publicPath: 'http://localhost:8000/dist/',
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
