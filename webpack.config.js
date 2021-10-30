const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, argv) => {
  const {mode} = argv
  const isProduction = mode === 'production'
  
  return {
    // entry: './src/index.js', esto es así por default
     output: {
      filename: isProduction 
        ? '[name].[contenthash].js' 
        : 'main.js',
      path: path.resolve(__dirname, 'build'),
      clean: true
    },
    devtool: 'inline-source-map', // 'source-map' el mejor pero el más costoso
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    devServer: {
      open: true,
      port: 3000,
      overlay: true, // abrir overlay con errores, pero se puede sacar
      compress: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
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
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        }
      ]
    }
  }

}
