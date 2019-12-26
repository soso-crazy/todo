const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.js'
  },

  devServer: {
    contentBase: './dist',
    compress: true,
    port: 9000,
    hot: true
  },
  // 编译出现runtime-only问题，查看vue.js安装的运行时 + 编译器 vs. 只包含运行时解决
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
    }
  },

  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'px2rem-loader',
            options: { remUnit: 75, remPrecision: 8 }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'px2rem-loader',
            options: { remUnit: 75, remPrecision: 8 }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=75&remPrecision=8!sass-loader',
            sass: 'vue-style-loader!css-loader!px2rem-loader?remUnit=75&remPrecision=8!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/, // 处理字体文件
        use: 'url-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 100000 // 图片超过限制大小所以不显示，增大limit来解决
          }
        }]
      }
    ]
  },

  plugins: [

    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),

    new CleanWebpackPlugin(['dist']),

    new webpack.HotModuleReplacementPlugin()
  ],
};

