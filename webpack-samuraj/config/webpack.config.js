const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name]-[contenthash].js',
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
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Webpack samuraja',
    // }),
    // new HtmlWebpackPlugin({
    //   title: 'Podstrona',
    //   filename: 'about.html'
    // }),
    new HtmlWebpackPlugin({
      title: 'Webpack z samurajem',
      template: 'src/template.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
