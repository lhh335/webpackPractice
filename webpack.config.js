const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry:
    path.resolve(__dirname, 'dev/index.js')
    ,
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: 'app.js'
    },
    devServer: {
        contentBase: 'www',
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
                test: /\.js[x]?$/,
                loaders: [
                    'babel-loader?presets[]=es2015&presets[]=react',
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
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([
            { from: 'www/indexs.html' },
        ]),
    ]
}

module.exports = config;