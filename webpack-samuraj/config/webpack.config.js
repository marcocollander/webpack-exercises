const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../', 'build'),
  },
  devServer: {
    open: false,
    contentBase: path.resolve(__dirname, '../', 'public'),
    port: 5001,
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.s[c]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|svg|gif|jepg)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack z samurajem',
      template: 'src/template.html',
    }),
  ],
};
