const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const { NODE_ENV = 'production' } = process.env;
module.exports = {
  entry: './src/server.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  stats: {
    warningsFilter: (warning) => {
      // Critical dependency
      return RegExp('node_modules/express/lib/view.js').test(warning);
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'package.json' }, { from: 'process.json' }],
    }),
  ],
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
};
