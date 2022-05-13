const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


const styleRules = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']

}
const jsRules = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic'
        }
      ]
    ]
  }
}

const rules = [jsRules, styleRules]

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'})
  ],
  module: {
    rules
  }
}