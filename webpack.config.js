const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {                  // 1
    entry: './js/main.js',        // 2
    output: {
        path: resolve(__dirname, 'dist'), //'build'
        //path: 'dist * / ', //resolve(__dirname, 'dist'),//
        filename: 'main.bundle.js' //[contenthash]  bundle
    },
    plugins: [

        new MiniCssExtractPlugin(
            {
                filename: '[name].[contenthash].css'
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: resolve(__dirname, 'index.html'),
            }
        ),
        new BundleAnalyzerPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,   //Картинки |css
                loader: 'file-loader',
                options: {

                    name: '[path][name].[ext][query]',
                },

            },
            {
                test: /\.css$/,
                //use: ['style-loader', 'css-loader'], // 2
                //use: [MiniCssExtractPlugin.loader, 'css-loader'],
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            
        ],
    },


};



