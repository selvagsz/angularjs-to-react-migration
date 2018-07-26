const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/react/index.js',
  output: {
    filename: 'react.dist.js',
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'env',
            'react',
          ]
        }
      }
    ]
  }
};
