const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.NODE_ENV === 'development';

const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: '../',
});

const cssConfig = dev ? cssDev : cssProd;

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/build.js',
    publicPath: '/',
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    inline: true,
    open: false,
    hot: true,
    historyApiFallback: true,
  },

  devtool: dev ? 'eval' : false,

  resolve: {
    extensions: ['.js', '.jsx', '.sass'],
    modules: ['node_modules', 'src'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-2'],
          },
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: cssConfig,
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.(woff2?|ttf|eot)$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/style.css',
      disable: dev,
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      dev,
      prod: !dev,
    }),
  ],
};
