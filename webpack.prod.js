'use strict';

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
            "typeof CANVAS_RENDERER": JSON.stringify(true),
            "typeof WEBGL_RENDERER": JSON.stringify(true),
            "typeof EXPERIMENTAL": JSON.stringify(false),
            "typeof PLUGIN_CAMERA3D": JSON.stringify(false),
            "typeof PLUGIN_FBINSTANT": JSON.stringify(false),

            // Development env
            '_DEV_': JSON.stringify(false),
            '_VERSION_': JSON.stringify(version),
        }),
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
        }),
        new CopyWebpackPlugin(copyFileList),
    ],
});

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        // Handle errors here
        console.log(stats.compilation.errors);
    }
    // Done processing
});
