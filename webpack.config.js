const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.NODE_ENV === 'development';

const cssDev = ['style-loader', 'css-loader', 'sass-loader', 'import-glob-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader', 'import-glob-loader'],
  publicPath: '../',
});

const cssConfig = dev ? cssDev : cssProd;

module.exports = {
  entry: './src/index.jsx',

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
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['node_modules', 'src'],
    alias: {
      mezr: 'assets/js/mezr.min.js',
    },
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
        test: /\.(scss|css)$/,
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
      {
        test: /mezr\.min\.js$/,
        use: 'imports-loader?this=>window',
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
