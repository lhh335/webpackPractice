const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: path.resolve(__dirname, 'www/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'bundle.js'
    },
    devServer: {
        devtool: 'eval',
        inline: true,
        port: 6000,
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            from: path.resolve(__dirname, 'build/admin.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config;