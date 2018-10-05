'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: {
        game: ['./src/main.js'],
    },
    resolve: {
        modules: ['src', 'assets', 'node_modules'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: [ /\.vert$/, /\.frag$/ ],
                use: 'raw-loader',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
            {
                test: /\.(ttf|eot|svg)$/,
                use: {
                    loader: 'file-loader',
                },
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

};
