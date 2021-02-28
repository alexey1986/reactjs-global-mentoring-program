const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = configDirs => {
    return {
        entry: configDirs.APP_DIR + '/index.js',
        resolve: {
            alias: {
                components: configDirs.APP_DIR + '/components/'
            },
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: configDirs.APP_DIR + '/index.html'
            }),
            new webpack.SourceMapDevToolPlugin({            
                filename: 'index.js.map',
                exclude: ['vendor.js']
            })
        ],
        output: {
            path: configDirs.BUILD_DIR,
            filename: 'bundle.compiled.js',
            publicPath: ''
        }
    }
};
