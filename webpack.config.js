const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');  
const Dotenv = require('dotenv-webpack'); 

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {                 
    static: './dist'      
  },                           
  devtool: 'eval-source-map',
  plugins: [
    new ESLintPlugin(), 
    new HtmlWebpackPlugin({
      title: 'currency-exchange-api',
      template: './src/index.html',
      inject: 'body'
    }),
    new CleanWebpackPlugin({
        verbose: true
      }), 
    new Dotenv()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

