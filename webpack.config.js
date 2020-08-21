const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimiseCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve('/dist'),
    publicPath: '/',
  },
  devServer: {
    hot: true,
    compress: true,
    contentBase: './build',
    port: 3000,
    proxy: [{
      context: [ '/api' ],
      target: 'http://libremo.test',
    }],
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [ MiniCssExtractPlugin.loader, 'css-loader', {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      }],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'minify',
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
    },
    {
      test: /\.(?:png|jpe?g|gif|svg|ico)$/,
      loader: 'file-loader',
      options: {
        name: 'media/[name].[ext]',
      },
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      scriptLoading: 'defer',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  optimization: {
    minimizer: [ new OptimiseCssAssetsPlugin() ],
  },
}
