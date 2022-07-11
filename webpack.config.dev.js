const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PwaWebpackPlugin = require('webpack-pwa-manifest')
// const CopyPlugin = require('copy-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  mode: 'development',

  resolve: {
    extensions: [
      '.js', ',jsx'
    ]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    new PwaWebpackPlugin({
      name: 'Petgram - App to find pet photos',
      shortname: 'Petgram',
      description: 'With petgram there is a huge amount of pet pics you can save',
      background_color: '#fff',
      theme_color: '#8d00ff',
      crossorigin: 'use-credentials',
      icons: [
        {
          src: path.resolve('src/components/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        },
        {
          src: path.resolve('src/components/assets/icon.png'),
          size: '1024x1024'
        },
        {
          src: path.resolve('src/components/assets/icon.png'),
          size: '1024x1024',
          purpose: 'maskable'
        }
      ]
    }),

    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          // eslint-disable-next-line prefer-regex-literals
          urlPattern: new RegExp('https://petgram-api-back.vercel.app/graphql'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })

    // new CopyPlugin({
    //   patterns: [{
    //     from: path.resolve(__dirname, 'src', 'assets'),
    //     to: 'assets'
    //   }
    //   ]
    // })
  ],

  performance: {
    hints: false
  },

  devtool: 'inline-source-map',

  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3006
  }
}
