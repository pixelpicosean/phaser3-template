'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackDevServer = require('webpack-dev-server');
const common = require('./webpack.common.js');
const colors = require('colors/safe');

const portfinder = require('portfinder');
portfinder.basePort = 4000;

portfinder.getPort(function(err, finalPort) {
    if (err) {
        callback(err);
    }
    const compiler = webpack(merge(common, {
        entry: {
            game: [
                // Live-reload
                `webpack-dev-server/client?http://localhost:${finalPort}`,
            ],
        },
        devtool: 'source-map',
        mode: 'development',
    }));
    const server = new WebpackDevServer(compiler, {
        stats: {
            colors: true,
        },
    });
    server.listen(finalPort, null, function() {
        console.log(`Project is running at: ${colors.bold(colors.blue('http://localhost:' + finalPort))}`);
    });
});
