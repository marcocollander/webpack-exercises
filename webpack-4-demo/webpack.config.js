const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  devtool: 'eval',
  devServer: {

  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   loader: 'html-loader',
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Gra w trzy karty',
      template: './src/template.html',
    }),
  ],
};
