const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },

    plugins: [
      new LodashModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.NODE_ENV === 'production' ? 'static' : 'server',
        defaultSizes: 'gzip',
        openAnalyzer: false
      })
    ]
  }
}
