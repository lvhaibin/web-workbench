const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    publicPath: config.output.publicPath,
}).listen(9090, 'localhost', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:9090/');
});

