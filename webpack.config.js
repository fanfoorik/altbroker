const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const context = path.resolve(__dirname);

const dev = process.env.NODE_ENV === 'development';

const cssDev = ['style-loader', 'css-loader', 'sass-loader', 'import-glob-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader', 'import-glob-loader'],
  publicPath: '../',
});

const lessDev = ['style-loader', 'css-loader', 'less-loader', 'import-glob-loader'];
const lessProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'less-loader', 'import-glob-loader'],
  publicPath: '../',
});

const lessModuleDev = [
  'style-loader',
  'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
  'less-loader',
];

const lessModuleProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'less-loader'],
  publicPath: '../',
});

const cssConfig = dev ? cssDev : cssProd;
const lessConfig = dev ? lessDev : lessProd;
const lessModuleConfig = dev ? lessModuleDev : lessModuleProd;

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
    // host: '192.168.1.235',
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
          query: {
            plugins: [
              'transform-react-jsx',
              [
                'react-css-modules',
                {
                  context,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: cssConfig,
      },
      {
        test: /\.less$/,
        exclude: path.resolve('./src/components'),
        use: lessConfig,
      },
      {
        test: /\.module.less$/,
        use: lessModuleConfig,
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertPathData: false },
              ],
            },
          },
        ],
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
      allChunks: true,
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new SpriteLoaderPlugin(),
    new webpack.DefinePlugin({
      dev,
      prod: !dev,
    }),
  ],
};
