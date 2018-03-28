'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {

    entry: {
        game: ['./src/main.js'],
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

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

};
