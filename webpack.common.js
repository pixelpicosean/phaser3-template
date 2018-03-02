'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

module.exports = {

    entry: {
        game: ['./src/main.js'],
        vendor: [
            'phaser',
        ],
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },

    module: {
        rules: [
          {
            test: [ /\.vert$/, /\.frag$/ ],
            use: 'raw-loader'
          }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body',
        }),
    ],

};
