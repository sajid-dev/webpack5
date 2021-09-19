const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: ['file-loader']
      },
      {
        test: /\.css/,
        use: [miniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.js/,
        exclude: '/node_modules',
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new TerserPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.resolve(process.cwd(), 'build/**/*')
      ]
    }),
    new HtmlWebpackPlugin()
  ]
}
