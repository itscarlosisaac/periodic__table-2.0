require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, 'src');
const distDir = path.resolve(__dirname, 'dist');

module.exports = () => {
  const CopyWebpack = new CopyWebpackPlugin([{
    from: path.resolve(srcDir, 'public'),
    to: 'public'
  }, ]);


  const HMR = new webpack.HotModuleReplacementPlugin();

  const HTMLWebpackPlugin = new HtmlWebpackPlugin({
    meta: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'UTF-8',
    },
    template: path.resolve(srcDir, 'index.html'),
  });

  return {
    mode: 'production',
    entry: './src/app.tsx',
    output: {
      filename: 'app.bundle.[hash].js',
      path: distDir,
    },
    plugins: [CopyWebpack, HTMLWebpackPlugin],
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    module: {
      rules: [{
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [{
            loader: "ts-loader"
          }]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader?limit=10000&mimetype=application/font-woff&name=&name=/css/webfonts/[name].[ext]',
        },
        {
          test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: 'file-loader?limit=10000&mimetype=application/font-woff&name=&name=/css/webfonts/[name].[ext]',
        },
      ]
    }
  }
}