const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
var webpack = require('webpack');

const outputDirectory = 'dist';

module.exports = {
    entry: ['babel-polyfill', './src/client/index.js'],
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(jpe?g|png|gif|woff|woff2|otf|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'assets/img/[name].[ext]'
                    }
                }
            ]
        }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        port: 3000,
        open: true,
        historyApiFallback: true,
        proxy: {
            '/api': 'https://skyconnect.netlify.app'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: './public/index.html' }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ]
};