const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:9090',
        "webpack/hot/only-dev-server",
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader",
            options: {
                getCustomTransformers: () => ({
                    before: [
                        tsImportPluginFactory({
                            libraryName: 'antd',
                            libraryDirectory: 'es',
                            style: 'css',
                        }),
                    ],
                }),
                compilerOptions: {
                    module: 'es2015',
                },
            },
        }, {
            test: /\.(less|css)$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader', 
                    options: {
                        modules: false,
                    } 
                },
                { loader: 'less-loader', options: { javascriptEnabled: true } }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'My App',
        template: './src/index.html'}),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.less', '.css', '.jsx', '.ts', '.tsx', '.json'],
    }
}