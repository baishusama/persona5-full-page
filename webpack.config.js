/**
 * The language used in this file can be changed
 * more on https://webpack.js.org/configuration/configuration-languages/
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
// const fs = require('fs');

/**
 * # 关于 `webpack -p` 命令：
 * === `webpack --optimize-minimize --define process.env.NODE_ENV="production"`
 * 注意这个命令中定义的 process.env.NODE_ENV 只能在 compiled 后的（非配置）代码中获取到，
 * 而 webpack.config.js 属于 configuration 的代码，无法使用 --define 中定义的环境变量
 * 所以这里我们使用 `NODE_ENV=production webpack -p`
 * > more on https://github.com/webpack/webpack/issues/2537#issuecomment-222363754
 */
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  devServer: {
    contentBase: './dist'
  },
  devtool: 'eval-source-map',
  entry: {
    app: './src/app.js'
    // print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      /**
       * TODO: [chunkhash] vs [hash] vs [contenthash]
       * [chunkhash] 用于 css 文件的时候，存在修改后重新编译的 hash 不会更新的问题
       * [contenthash] 是最新（相较于前两者）提出的（为了解决这个问题提出的？？）
       * 根据 https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1 一文，
       * MiniCssExtractPlugin 结合 [contenthash] 可以解决上述问题
       */
      // TODO: chunk 是怎样的存在？还有 ``
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tpl.html'
    }),
    new webpack.BannerPlugin('仅供交流使用，如有侵权必删 Orz') // first lines in scripts
  ],
  output: {
    filename: devMode ? '[name].bundle.js' : '[name].bundle-[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery'
          },
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // TODO: needed ???
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          /**
           * The order SHOULD be: css|style-loader -> postcss-loader -> sass|less|stylus-loader
           */
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // https://webpack.js.org/loaders/postcss-loader/#css-modules
              modules: true
              /**
               * TODO: 为什么 localIdentName 不起作用？从结果来看 MiniCssExtractPlugin 的优先级更高！
               */
              // localIdentName: '[path][name]__[local]--[hash:base64:5]'
              /**
               * 使用默认的 `url: true` 的话，名字能自动变成 file-loader 指定的 hash 值
               */
              // url: false
            }
          },
          'postcss-loader',
          // 'resolve-url-loader',
          'sass-loader'
        ]
      },
      /**
       * [url-loader](https://webpack.js.org/loaders/url-loader/)
       * [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)
       */
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            /**
             * [file-loader](https://github.com/webpack-contrib/file-loader)
             * [use name with context](https://github.com/webpack/webpack/issues/395#issuecomment-51176561)
             */
            options: {
              context: 'src',
              name: devMode ? '[path][name].[ext]' : '[path][name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: 'src',
              name: devMode ? '[path][name].[ext]' : '[path][name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
};
