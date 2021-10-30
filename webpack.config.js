const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js' // dont needed really
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  devtool: 'inline-source-map', // 'source-map' el mejor pero el más costoso
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic' // default: 'classic' , react_jsx_runtime mejor performance que react_createElement
              }
            ]
          ]
        }
      }
    ]
  }

}
