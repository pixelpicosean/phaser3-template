'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let common = require('./webpack.common.js');
const version = require('./package.json').version;

const copyFileList = [
    { from: 'media', to: 'media' },
];

const config = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            // Enable both canvas and WebGL for better support
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true),

            // Development env
            '_DEV_': JSON.stringify(false),
            '_VERSION_': JSON.stringify(version),
        }),
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
        }),
        new UglifyJSPlugin(),
        new CopyWebpackPlugin(copyFileList),
    ],
});

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        // Handle errors here
    }
    // Done processing
});
