const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');

function buildConfig(configDirs) {
    return {
        entry: configDirs.APP_DIR + '/index.js',
        output: {
            path: configDirs.BUILD_DIR,
            filename: 'bundle.compiled.js',
            publicPath: '/'
        },
        mode: 'production',
        resolve: {
            alias: {
                components: configDirs.APP_DIR + '/components/'
            },
            extensions: ['.js', '.jsx']
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ["source-map-loader"],
                    enforce: "pre"
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(png|svg|jpg|gif|ttf|eot|woff)$/,
                    use: ["file-loader"]
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                }
            ]
        },
        devtool: false,
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: configDirs.APP_DIR + '/index.html'
            }),
            new webpack.SourceMapDevToolPlugin({
                filename: 'index.js.map',
                exclude: ['vendor.js']
            })
        ]
    };
};

module.exports = buildConfig;