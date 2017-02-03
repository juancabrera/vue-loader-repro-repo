const path = require('path');
const projectRoot = path.resolve(__dirname);

module.exports = {
  entry: path.join(projectRoot, 'src/client.js'),
  output: {
    path: path.join(projectRoot, 'dist'),
    filename: 'bundle.client.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre', 
        test: /.vue$/,
        loader: 'eslint-loader',
        include: projectRoot,
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: {
            plugins: [
              require('stylelint')(),
              require('postcss-import')(),
              require('postcss-cssnext')({
                browsers: 'last 2 versions'
              }),
              require("postcss-reporter")({ clearMessages: true }),
            ],
            options: {
              autoprefixer: false
            }
          }
        },
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ["babel-loader", "eslint-loader"],
        include: projectRoot,
        exclude: /node_modules/,
      }
    ]
  }
};
