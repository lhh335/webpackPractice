const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry:
    path.resolve(__dirname, 'dev/index.js')
    ,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    devServer: {
        contentBase: 'build',
        hot: true,
        inline: true,
        port: 4000,
    },
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.md', '.txt', '.proto'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader',
                include: path.resolve(__dirname, 'src/app/components/raw-code'),
            },
            {
                test: /\.md$/,
                loader: 'raw-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            { from: 'www/index.html' },
        ]),
    ]
}

module.exports = config;