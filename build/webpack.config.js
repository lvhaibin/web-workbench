const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:9090',
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
          { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'My App',
        template: './src/index.html'
    })],
    resolve: {
        extensions: ['.ts', '.tsx', '.json'],
    }
}