const path = require('path');

module.exports = {
    "mode": "development",
  entry: './src/hello-world-complex.ts',
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'hello-world-complex.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
