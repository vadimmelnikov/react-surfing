const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: ['babel-polyfill', path.resolve(__dirname, 'src/scripts/main.js')],
    },

    resolve: {
        alias: {
            Styles: path.resolve(__dirname, 'src/styles/')
        }
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle-[chunkhash].js',
        publicPath: path.build
    },

    devServer: {
        contentBase: path.join(__dirname, '/public'),
        compress: true,
        historyApiFallback: true,
        port: 9000
    },

    module: {
        noParse: /libs\//,
        rules: [
            {
                test: /libs\/.+\.js$/,
                exclude: /node_modules/,
                use: "imports-loader?this=>window,define=>false,require=>false,module=>false,exports=>false"
            },
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader?modules&sourceMap&camelCase&localIdentName="[name]-[local]___[hash:base64:2]"', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader?sourceMap', 'postcss-loader',]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000?name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "url-loader?name=scr/img/[name].[ext]"},
        ]
    },

    plugins: [
        new CleanWebpackPlugin('public', {}),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash:8].css',
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
    ]
};
