const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
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
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js/,
        exclude: '/node_modules',
        use: {
          loader: "babel-loader",
          options: {
            preset: ['@babel/env'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  }
}
